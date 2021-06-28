<template>
	<view :class="['hc-noticebar', type]" :style="{margin: margin, backgroundColor: backgroundColor, color: color, borderRadius: radius}">
		<view class="hc-noticebar__icon" v-if="icon">
			<hc-icon :color="iconColor" :name="icon"></hc-icon>
		</view>
		<view class="hc-noticebar__content">
			<view
				class="hc-noticebar__wrap"
				:animation="animationData"
				:style="[{
					position: scrollable ? 'absolute' : 'static',
					width: scrollable ? 'auto' : '100%'
				}]"
			>
				<text
					class="hc-noticebar__label"
					:style="{
						width: scrollable ? 'auto' : '100%'
					}"
				><slot></slot>{{scrollable}}</text>
			</view>
		</view>
		<view class="hc-noticebar__close" v-if="close" @click="onClose">
			<hc-icon :name="closeIcon"></hc-icon>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'hc-noticebar',
		props: {
			scrollable: {
				type: Boolean,
				default: false
			},
			margin: {
				type: String
			},
			speed: {
				type: Number,
				default: 60
			},
			icon: {
				type: String
			},
			iconColor: {
				type: String
			},
			close: {
				type: Boolean,
				default: false
			},
			closeIcon: {
				type: String,
				default: 'close-circle'
			},
			backgroundColor: {
				type: String
			},
			color: {
				type: String
			},
			radius: {
				type: String
			},
			type: {
				type: String
			}
		},
		data() {
			return {
				animationData: {},
				animation: null
			};
		},
		mounted () {
			this.$utils.getFields('.hc-noticebar__wrap', this).then(res => {
			})
		},
		mounted () {
			if (this.scrollable) {
				this.$utils.getFields('.hc-noticebar__wrap', this).then(res => {
					const duration = res.width / this.speed * 1000
					this.animation = uni.createAnimation()
					this.marquee(this.animation, res, duration)
				})
			}
		},
		methods: {
			marquee (animation, res, duration) {
				animation.translateX(-res.width).step({duration: duration, timingFunction: 'linear'})
				this.animationData = animation.export()
				setTimeout(() => {
					animation.translateX(0).step({duration: 0})
					this.animationData = animation.export()
					setTimeout(() => {
						this.marquee(animation, res, duration)
					}, 100)
				}, duration)
			},
			onClose () {
				this.animationData = {}
				this.$emit('close')
			},
			refresh (v) {
				if (v) {
					this.$utils.getFields('.hc-noticebar__wrap', this).then(res => {
						const duration = res.width / this.speed * 1000
						this.animation = uni.createAnimation()
						this.marquee(this.animation, res, duration)
					})
				} else {
					console.log('销毁动画')
					this.animationData = null
				}
				console.log(this.animation)
			}
		},
		onUnload () {
			console.log('unload')
		},
		watch: {
			'scrollable': 'refresh'
		}
	}
</script>

<style lang="scss">
.hc-noticebar{
	display:flex;
	flex-direction: row;
	align-items:center;
	background-color: $uni-noticebar-background;
	padding: 0 $uni-noticebar-fontsize;
	color: $uni-noticebar-color;
	&__icon{
		margin-right: $uni-noticebar-fontsize * 0.5;
	}
	&__close{
		margin-left: $uni-noticebar-fontsize * 0.5;
	}
	&__content{
		flex:1;
		white-space: nowrap;
		display:flex;
		flex-direction:row;
		align-items:center;
		overflow:hidden;
		position:relative;
		height:$uni-noticebar-height;
	}
	&__wrap{
		position:absolute;
		transition-timing-function: linear;
		transition-delay: 0s;
		left:0;
		top:0;
		height:$uni-noticebar-height;
		display:flex;
		flex-direction: row;
		align-items: center;
	}
	&__label{
		font-size:$uni-noticebar-fontsize;
		color:inherit;
		overflow:hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	&.primary{
		background-color: $uni-color-primary;
		color: $uni-text-color-inverse;
	}
	&.warning{
		background-color: $uni-color-warning;
		color: $uni-text-color-inverse;
	}
	&.success{
		background-color: $uni-color-success;
		color: $uni-text-color-inverse;
	}
	&.danger{
		background-color: $uni-color-danger;
		color: $uni-text-color-inverse;
	}
}
</style>
