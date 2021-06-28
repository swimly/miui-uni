<template>
	<view class="hc-alert">
		<hc-mask v-model="value"></hc-mask>
		<view :class="['hc-alert__panel', effect, {visible}]">
			<slot name="title">
				<text class="hc-alert__title">
					{{title}}
				</text>
			</slot>
			<view class="hc-alert__content">
				<slot>
					<text class="hc-alert__text">{{content}}</text>
				</slot>
			</view>
			<view :class="['hc-alert__footer', {vertical}]" v-if="buttons[0]">
				<view class="hc-alert__footer_item" @click="onButtonClick(item)" v-for="(item, index) in buttons" :key="index">
					<text class="hc-alert__footer_label">
						{{buttonLabel(item)}}
					</text>
					<text v-if="duration">
						{{index == buttons.length - 1 ? `(${time / 1000}S)` : ''}}
					</text>
				</view>
			</view>
			<view class="hc-alert__close" @click="onButtonClick(null)" v-if="close">
				<hc-icon :size="56" :name="closeIcon"></hc-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'hc-alert',
		props: {
			value: {
				type: Boolean
			},
			title: {
				type: String
			},
			content: {
				type: String
			},
			effect: {
				type: String
			},
			vertical: {
				type: Boolean
			},
			closeIcon: {
				type: String,
				default: 'close-circle'
			},
			close: {
				type: Boolean
			},
			duration: {
				type: [Number, String]
			},
			buttons: {
				type: Array,
				default: () => {
					return [{
						label: '确定',
						type: 'primary'
					}]
				}
			}
		},
		computed: {
			buttonLabel () {
				return (item) => {
					return typeof item == 'string' ? item : item.label
				}
			}
		},
		data() {
			return {
				visible: this.value,
				time: parseInt(this.duration)
			};
		},
		methods: {
			updateValue (v) {
				this.visible = v
				if (v && this.duration) {
					let timer = setInterval(() => {
						this.time -= 1000
						console.log(this.time)
						if (this.time <= 0) {
							this.onButtonClick()
							clearInterval(timer)
							setTimeout(() => {
								this.time = this.duration
							}, 300)
						}
					}, 1000)
				}
			},
			onButtonClick (item) {
				this.visible = !this.visible
				this.$emit('input', this.visible)
				if (item) {
					this.$emit('click', item)
				}
			}
		},
		watch: {
			'value': 'updateValue'
		}
	}
</script>

<style lang="scss">
.hc-alert{
	&__panel{
		background-color: $uni-alert-background;
		position:fixed;
		top:50%;
		left:50%;
		transform: translate(-50%, -50%);
		z-index:-1;
		width: 75%;
		border-radius: $uni-alert-radius;
		box-sizing: border-box;
		display:flex;
		flex-direction: column;
		align-items: center;
		transition: 0.3s;
		&.zoomIn{
			transform: translate3d(-50%, -50%, 0) scale(0.1);
			opacity:0;
		}
		&.fadeIn{
			opacity:0;
		}
		&.slideInDown{
			top: 40%;
			opacity:0;
		}
		&.slideInUp{
			top: 60%;
			opacity:0;
		}
		&.zoomInDown{
			top: 40%;
			transform: translate3d(-50%, -50%, 0) scale(0.9);
			opacity:0;
		}
		&.zoomInUp{
			top: 60%;
			transform: translate3d(-50%, -50%, 0) scale(0.9);
			opacity:0;
		}
		&.magical{
			top: 50%;
			transform: translate3d(-50%, -50%, 0) scale(1.2);
			opacity:0;
		}
		&.visible{
			top: 50%;
			transform: translate3d(-50%, -50%, 0) scale(1);
			opacity:1;
			z-index:101;
		}
	}
	&__title{
		font-size: $uni-alert-title-fontsize;
		color: $uni-alert-title-color;
		margin: 0 $uni-alert-padding;
		margin: $uni-alert-padding 0 0 0;
	}
	&__content{
		font-size: $uni-alert-fontsize;
		color: $uni-alert-color;
		padding: $uni-alert-padding;
		width:100%;
		box-sizing: border-box;
		margin-bottom: $uni-alert-padding * 0.5;
	}
	&__close{
		position:absolute;
		left:50%;
		bottom:0;
		transform: translate(-50%, 150%);
		color: $uni-text-color-inverse;
	}
	&__footer{
		width:100%;
		display:flex;
		flex-direction: row;
		align-items:center;
		box-sizing: border-box;
		position:relative;
		&:before{
			content:"";
			display:block;
			width:100%;
			position:absolute;
			top:0;
			left:0;
			height:1rpx;
			background:$uni-border-color;
			transform: scaleY(0.5);
		}
		&_item{
			flex:1;
			display:flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			font-size: $uni-alert-fontsize;
			color: $uni-alert-color;
			padding: $uni-alert-padding * 0.8 0;
			position:relative;
			&:before{
				content:"";
				display:block;
				width:1rpx;
				height:100%;
				position:absolute;
				left:0;
				top:0;
				transform: scaleX(0.5);
				background-color: $uni-border-color;
			}
			&:first-child{
				&:before{
					display:none;
				}
			}
			&:last-child{
				color: $uni-color-primary;
			}
		}
		&.vertical{
			&:before{
				// display:none;
			}
			flex-direction: column;
			.hc-alert__footer_item{
				width:100%;
				&:before{
					width:100%;
					height: 1rpx;
					transform: scale(1, 0.5);
					
				}
			}
		}
	}
}
</style>
