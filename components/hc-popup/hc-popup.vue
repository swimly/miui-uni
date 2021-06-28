<template>
	<view class="hc-popup">
		<hc-mask v-if="mask" v-model="visible" @destory="onMaskDestory" @click="onMaskClick"></hc-mask>
		<view 
			:class="['hc-popup__content', mode, {visible, transparent}]"
			:style="{transition: !transition ? '0s' : '', borderRadius: radius, minWidth: width, minHeight: height}"
		>
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'hc-popup',
		props: {
			value: {
				type: Boolean
			},
			mode: {
				type: String,
				default: 'bottom'
			},
			borderRadius: {
				type: [Number, String],
				default: 0
			},
			area: {
				type: String,
				default: '30%'
			},
			transparent: {
				type: Boolean
			},
			clickable: {
				type: Boolean
			},
			mask: {
				type: Boolean,
				default: true
			}
		},
		computed: {
			width () {
				return this.mode == 'left' || this.mode == 'right' ? this.area : ''
			},
			height () {
				return this.mode == 'top' || this.mode == 'bottom' ? this.area : ''
			},
			radius () {
				let r
				const {borderRadius} = this
				switch (this.mode) {
					case 'top':
						r = `0 0 ${borderRadius}rpx ${borderRadius}rpx`
						break
					case 'bottom':
						r = `${borderRadius}rpx ${borderRadius}rpx 0 0`
						break
					case 'left':
						r = `0 ${borderRadius}rpx ${borderRadius}rpx 0`
						break
					case 'right':
						r = `${borderRadius}rpx 0 0 ${borderRadius}rpx`
						break
				}
				return r
			}
		},
		data() {
			return {
				visible: this.value,
				transition: true
			};
		},
		methods: {
			onUpdate (v) {
				this.visible = v
			},
			onMaskDestory () {
				this.visible = !this.visible
				this.$emit('input', this.visible)
				this.$emit('destory')
			},
			onModeChange () {
				this.transition = false
				setTimeout(() => {
					this.transition = true
				}, 10)
			},
			onMaskClick () {
				if (this.clickable) {
					this.onMaskDestory()
				}
			}
		},
		watch: {
			'value': 'onUpdate',
			'mode': 'onModeChange'
		}
	}
</script>

<style lang="scss">
.hc-popup{
	&__content{
		position:fixed;
		background-color: $uni-bg-color;
		z-index:101;
		transition: transform .3s;
		&.transparent{
			background-color: transparent;
		}
		&.bottom{
			bottom:0;
			left:0;
			right:0;
			transform: translate3d(0, 100%, 0);
		}
		&.top{
			top:var(--window-top);
			left:0;
			right:0;
			transform: translate3d(0, -100%, 0);
		}
		&.left{
			bottom:0;
			left:0;
			top:0;
			transform: translate3d(-100%, 0, 0);
		}
		&.right{
			bottom:0;
			top:0;
			right:0;
			transform: translate3d(100%, 0, 0);
		}
		&.visible{
			transform: translate3d(0, 0, 0);
		}
	}
}
</style>
