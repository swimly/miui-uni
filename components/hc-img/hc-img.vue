<template>
	<view class="hc-image" @tap="onClick" :style="[wrapStyle, backgroundStyle]">
		<image
			:src="src"
			class="hc-image__core"
			:mode="mode"
			:lazy-load="lazy"
			:webp="webp"
			:show-menu-by-longpress="longPress"
			@load="onLoadHandler"
			@error="onErrorHandler"
		></image>
		<view
			v-if="showLoading && loading"
			class="hc-image__loading"
			:style="{
				borderRadius: shape == 'circle' ? '50%' : $hc.addUnit(borderRadius),
				backgroundColor: this.bgColor
			}"
		>
			<slot v-if="$slots.loading" name="loading" />
			<hc-icon v-else :name="loadingIcon" :width="width" :height="height"></hc-icon>
		</view>
		<view
			v-if="showError && isError && !loading"
			class="hc-image__error"
			:style="{
				borderRadius: shape == 'circle' ? '50%' : $hc.addUnit(borderRadius)
			}"
		>
			<slot v-if="$slots.error" name="error" />
			<hc-icon v-else :name="errorIcon" :width="width" :height="height"></hc-icon>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'hc-img',
		props: {
			src: {
				type: String
			},
			mode: {
				type: String,
				default: 'aspectFill'
			},
			lazy: {
				type: Boolean
			},
			webp: {
				type: Boolean
			},
			longPress: {
				type: Boolean
			},
			width: {
				type: [String, Number],
				default: '100%'
			},
			height: {
				type: [String, Number],
				default: '100%'
			},
			shape: {
				type: String,
				default: 'square'
			},
			borderRadius: {
				type: [String, Number],
				default: 0
			},
			// 加载中的图标，或者小图片
			loadingIcon: {
				type: String,
				default: 'loading-circle'
			},
			// 加载失败的图标，或者小图片
			errorIcon: {
				type: String,
				default: 'error-circle'
			},
			// 是否显示加载中的图标或者自定义的slot
			showLoading: {
				type: Boolean,
				default: true
			},
			// 是否显示加载错误的图标或者自定义的slot
			showError: {
				type: Boolean,
				default: true
			},
			// 是否需要淡入效果
			fade: {
				type: Boolean,
				default: true
			},
			// 只支持网络资源，只对微信小程序有效
			webp: {
				type: Boolean,
				default: false
			},
			// 过渡时间，单位ms
			duration: {
				type: [String, Number],
				default: 500
			},
			// 背景颜色，用于深色页面加载图片时，为了和背景色融合
			bgColor: {
				type: String,
				default: '#f3f4f6'
			}
		},
		data() {
			return {
				// 图片是否加载错误，如果是，则显示错误占位图
				isError: false,
				// 初始化组件时，默认为加载中状态
				loading: true,
				// 不透明度，为了实现淡入淡出的效果
				opacity: 1,
				// 过渡时间，因为props的值无法修改，故需要一个中间值
				durationTime: this.duration,
				// 图片加载完成时，去掉背景颜色，因为如果是png图片，就会显示灰色的背景
				backgroundStyle: {}
			};
		},
		computed: {
			wrapStyle() {
				let style = {};
				// 通过调用addUnit()方法，如果有单位，如百分比，px单位等，直接返回，如果是纯粹的数值，则加上rpx单位
				style.width = this.$hc.addUnit(this.width);
				style.height = this.$hc.addUnit(this.height);
				// 如果是配置了圆形，设置50%的圆角，否则按照默认的配置值
				style.borderRadius = this.shape == 'circle' ? '50%' : this.$hc.addUnit(this.borderRadius);
				// 如果设置圆角，必须要有hidden，否则可能圆角无效
				style.overflow = this.borderRadius > 0 ? 'hidden' : 'visible';
				if (this.fade) {
					style.opacity = this.opacity;
					style.transition = `opacity ${Number(this.durationTime) / 1000}s ease-in-out`;
				}
				return style;
			}
		},
		methods: {
			onClick() {
				this.$emit('click');
			},
			// 图片加载失败
			onErrorHandler() {
				this.loading = false;
				this.isError = true;
				this.$emit('error');
			},
			// 图片加载完成，标记loading结束
			onLoadHandler() {
				this.loading = false;
				this.isError = false;
				this.$emit('load');
				// 如果不需要动画效果，就不执行下方代码，同时移除加载时的背景颜色
				// 否则无需fade效果时，png图片依然能看到下方的背景色
				if (!this.fade) return this.removeBgColor();
				// 原来opacity为1(不透明，是为了显示占位图)，改成0(透明，意味着该元素显示的是背景颜色，默认的灰色)，再改成1，是为了获得过渡效果
				this.opacity = 0;
				// 这里设置为0，是为了图片展示到背景全透明这个过程时间为0，延时之后延时之后重新设置为duration，是为了获得背景透明(灰色)
				// 到图片展示的过程中的淡入效果
				this.durationTime = 0;
				// 延时50ms，否则在浏览器H5，过渡效果无效
				setTimeout(() => {
					this.durationTime = this.duration;
					this.opacity = 1;
					setTimeout(() => {
						this.removeBgColor();
					}, this.durationTime);
				}, 50);
			},
			// 移除图片的背景色
			removeBgColor() {
				// 淡入动画过渡完成后，将背景设置为透明色，否则png图片会看到灰色的背景
				this.backgroundStyle = {
					backgroundColor: 'transparent'
				};
			}
		}
	}
</script>

<style lang="scss">
.hc-image{
	&__core{
		will-change: transform;
	}
}
</style>
