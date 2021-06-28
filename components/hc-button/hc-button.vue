<template>
	<button
		:style="{margin: margin}"
		:class="['hc-button', type, size, {conner, rounder, plain, light, outline, ripple}]"
		:open-type="openType"
		:form-type="formType"
		:app-parameter="appParameter"
		@tap.stop="onClick($event)"
		@getphonenumber="getphonenumber"
		@getuserinfo="getuserinfo"
		@error="error"
		@opensetting="opensetting"
		@launchapp="launchapp"
	>
		<view class="hc-button__icon" v-if="icon || loading">
			<slot name="icon">
				<hc-icon :name="icons" :spin="loading"></hc-icon>
			</slot>
		</view>
		<text class="hc-button__label">
			<slot></slot>
		</text>
		<view
			:class="['hc-button__ripple', {active}]"
			:style="{
				top: `${rippleTop}px`,
				left: `${rippleLeft}px`,
				width: `${rippleSize}px`,
				height: `${rippleSize}px`,
				backgroundColor: rippleColor || 'rgba(0, 0, 0, 0.15)'
			}"
			v-if="ripple"
			></view>
	</button>
</template>

<script>
	import HCIcon from '../hc-icon/hc-icon.vue'
	export default {
		name: 'hc-button',
		components: {
			HCIcon
		},
		computed: {
			icons () {
				return this.loading ? this.loadingIcon : this.icon
			}
		},
		props: {
			margin: {
				type: String
			},
			icon: {
				type: String
			},
			type: {
				type: String
			},
			conner: {
				type: Boolean
			},
			rounder: {
				type: Boolean
			},
			plain: {
				type: Boolean
			},
			light: {
				type: Boolean
			},
			outline: {
				type: Boolean
			},
			size: {
				type: String
			},
			styles: {
				type: Object
			},
			loading: {
				type: Boolean
			},
			loadingIcon: {
				type: String,
				default: 'shuaxin'
			},
			ripple: {
				type: Boolean
			},
			rippleColor: {
				type: String
			},
			rippleSize: {
				type: Number,
				default: 120
			},
			openType: {
				type: String
			},
			formType: {
				type: String
			},
			appParameter: {
				type: Boolean
			}
		},
		data() {
			return {
				rippleTop: 0,
				rippleLeft: 0,
				fields: {},
				active: false
			};
		},
		methods: {
			onClick (e) {
				if (this.ripple) {
					this.active = false
					this.$nextTick(function(){
						this.getWaveQuery(e)
					})
				}
				this.$emit('click', e)
			},
			getWaveQuery(e) {
				this.getElQuery().then(res => {
					// 查询返回的是一个数组节点
					let data = res[0];
					// 查询不到节点信息，不操作
					if (!data.width || !data.width) return;
					// 水波纹的最终形态是一个正方形(通过border-radius让其变为一个圆形)，这里要保证正方形的边长等于按钮的最长边
					// 最终的方形（变换后的圆形）才能覆盖整个按钮
					data.targetWidth = data.height > data.width ? data.height : data.width;
					if (!data.targetWidth) return;
					this.fields = data;
					let touchesX = '',
						touchesY = '';
					// #ifdef MP-BAIDU
					touchesX = e.changedTouches[0].clientX;
					touchesY = e.changedTouches[0].clientY;
					// #endif
					// #ifdef MP-ALIPAY
					touchesX = e.detail.clientX;
					touchesY = e.detail.clientY;
					// #endif
					// #ifndef MP-BAIDU || MP-ALIPAY
					touchesX = e.touches[0].clientX;
					touchesY = e.touches[0].clientY;
					// #endif
					// 获取触摸点相对于按钮上边和左边的x和y坐标，原理是通过屏幕的触摸点（touchesY），减去按钮的上边界data.top
					// 但是由于`transform-origin`默认是center，所以这里再减去半径才是水波纹view应该的位置
					// 总的来说，就是把水波纹的矩形（变换后的圆形）的中心点，移动到我们的触摸点位置
					console.log(touchesX, touchesY, data.top, data.left, data.targetWidth)
					this.rippleTop = touchesY - data.top;
					this.rippleLeft = touchesX - data.left;
					this.$nextTick(() => {
						this.active = true;
						setTimeout(() => {
							this.active = false
						}, 300)
					});
				});
			},
			// 获取节点信息
			getElQuery() {
				return new Promise(resolve => {
					let queryInfo = '';
					// 获取元素节点信息，请查看uniapp相关文档
					// https://uniapp.dcloud.io/api/ui/nodes-info?id=nodesrefboundingclientrect
					queryInfo = uni.createSelectorQuery().in(this);
					//#ifdef MP-ALIPAY
					queryInfo = uni.createSelectorQuery();
					//#endif
					queryInfo.select('.hc-button').boundingClientRect();
					queryInfo.exec(data => {
						resolve(data);
					});
				});
			},
			getphonenumber(res) {
				this.$emit('getphonenumber', res);
			},
			getuserinfo(res) {
				this.$emit('getuserinfo', res);
			},
			error(res) {
				this.$emit('error', res);
			},
			opensetting(res) {
				this.$emit('opensetting', res);
			},
			launchapp(res) {
				this.$emit('launchapp', res);
			}
		}
	}
</script>

<style lang="scss">
.hc-button{
		display:flex;
		background:none;
		border:none;
		border-radius:0;
		flex-direction: row;
		align-items:center;
		height:$uni-button-height;
		width:100%;
		justify-content: center;
		color:$uni-button-color-base;
		font-size:$uni-button-fontsize;
		transition:0.3s;
		position:relative;
		overflow:hidden;
		&:after{
			content:"";
			display:block;
			border:1rpx solid $uni-button-border;
			width:200%;
			height:200%;
			box-sizing: border-box;
			transform-origin: left top;
			transform: scale(0.5);
			position:absolute;
			left:0;
			top:0;
			z-index:1;
			transition: 0.3s;
			border-radius:0;
		}
		&.ripple{
			&:after{
				display:none;
			}
		}
		&:active{
			&:after{
				background-color: rgba(0,0,0,0.05);
			}
		}
		&.conner{
			border-radius:$uni-button-radius;
			&:after{
				border-radius:$uni-button-radius * 2;
			}
		}
		&.rounder{
			border-radius:$uni-button-height / 2;
			&:after{
				border-radius:$uni-button-height;
			}
		}
		&.mini{
			display:inline-flex;
			width:auto;
			height:$uni-button-height * 0.65;
			padding:0 $uni-button-height * 0.15;
			font-size: $uni-button-fontsize * 0.95;
		}
		&.small{
			display:inline-flex;
			width:auto;
			height:$uni-button-height * 0.8;
			padding:0 $uni-button-height * 0.3;
			font-size: $uni-button-fontsize;
		}
		&.medium{
			display:inline-flex;
			width:auto;
			height:$uni-button-height * 0.9;
			padding:0 $uni-button-height * 0.4;
			font-size: $uni-button-fontsize;
		}
		&__label{
			font-size:inherit;
			position:relative;
			z-index:10;
		}
		&__icon{
			margin-right: $uni-button-fontsize * 0.6;
		}
		&__ripple{
			position:absolute;
			z-index:0;
			border-radius:100%;
			background-clip: padding-box;
			pointer-events: none;
			user-select: none;
			transform-origin: center;
			transform: translate(-50%,-50%) scale(0);
			opacity:0;
			&.active{
				transform: translate(-50%,-50%) scale(1);
				transition: transform 0.3s;
				opacity:1;
			}
		}
		&.primary{
			background-color: $uni-color-primary;
			color: $uni-text-color-inverse;
			&:active{
				&:after{
					background-color: darken($uni-color-primary, 5);
				}
			}
			&:after{
				border-color: rgba($uni-color-primary, 0.2);
			}
			&.plain{
				background-color: rgba($uni-color-primary, 0.1);
				color: rgba($uni-color-primary, 0.8);
				&:active{
					&:after{
						background-color: darken(rgba($uni-color-primary, 0.1), 5);
					}
				}
				&:after{
					border-color: rgba($uni-color-primary, 0.2);
				}
			}
			&.light{
				background-color: rgba($uni-color-primary, 0.1);
				color: rgba($uni-color-primary, 0.8);
				&:active{
					&:after{
						background-color: darken(rgba($uni-color-primary, 0.1), 5);
					}
				}
				&:after{
					border-color:transparent;
				}
			}
			&.outline{
				background-color: rgba($uni-color-primary, 0);
				color: rgba($uni-color-primary, 0.8);
				&:active{
					&:after{
						background-color: darken(rgba($uni-color-primary, 0.1), 5);
					}
				}
				&:after{
					border-color: rgba($uni-color-primary, 0.2);
				}
			}
		}
		&.warning{
			background-color: $uni-color-warning;
			color: $uni-text-color-inverse;
			&:active{
				&:after{
					background-color: darken($uni-color-warning, 5);
				}
			}
			&:after{
				border-color: rgba($uni-color-warning, 0.2);
			}
			&.plain{
				background-color: rgba($uni-color-warning, 0.1);
				color: rgba($uni-color-warning, 0.8);
				&:active{
					&:after{
						background-color: darken(rgba($uni-color-warning, 0.1), 5);
					}
				}
				&:after{
					border-color: rgba($uni-color-warning, 0.2);
				}
			}
			&.light{
				background-color: rgba($uni-color-warning, 0.1);
				color: rgba($uni-color-warning, 0.8);
				&:active{
					&:after{
						background-color: darken(rgba($uni-color-warning, 0.1), 5);
					}
				}
				&:after{
					border-color:transparent;
				}
			}
			&.outline{
				background-color: rgba($uni-color-warning, 0);
				color: rgba($uni-color-warning, 0.8);
				&:active{
					&:after{
						background-color: darken(rgba($uni-color-warning, 0.1), 5);
					}
				}
				&:after{
					border-color: rgba($uni-color-warning, 0.2);
				}
			}
		}
		&.success{
			background-color: $uni-color-success;
			color: $uni-text-color-inverse;
			&:active{
				&:after{
					background-color: darken($uni-color-success, 5);
				}
			}
			&:after{
				border-color: rgba($uni-color-success, 0.2);
			}
			&.plain{
				background-color: rgba($uni-color-success, 0.1);
				color: rgba($uni-color-success, 0.8);
				&:active{
					&:after{
						background-color: darken(rgba($uni-color-success, 0.1), 5);
					}
				}
				&:after{
					border-color: rgba($uni-color-success, 0.2);
				}
			}
			&.light{
				background-color: rgba($uni-color-success, 0.1);
				color: rgba($uni-color-success, 0.8);
				&:active{
					&:after{
						background-color: darken(rgba($uni-color-success, 0.1), 5);
					}
				}
				&:after{
					border-color: transparent;
				}
			}
			&.outline{
				background-color: rgba($uni-color-success, 0);
				color: rgba($uni-color-success, 0.8);
				&:active{
					&:after{
						background-color: darken(rgba($uni-color-success, 0.1), 5);
					}
				}
				&:after{
					border-color: rgba($uni-color-success, 0.2);
				}
			}
		}
		&.danger{
			background-color: $uni-color-danger;
			color: $uni-text-color-inverse;
			&:active{
				&:after{
					background-color: darken($uni-color-danger, 5);
				}
			}
			&:after{
				border-color: rgba($uni-color-danger, 0.2);
			}
			&.plain{
				background-color: rgba($uni-color-danger, 0.1);
				color: rgba($uni-color-danger, 0.8);
				&:active{
					&:after{
						background-color: darken(rgba($uni-color-danger, 0.1), 5);
					}
				}
				&:after{
					border-color: rgba($uni-color-danger, 0.2);
				}
			}
			&.light{
				background-color: rgba($uni-color-danger, 0.1);
				color: rgba($uni-color-danger, 0.8);
				&:active{
					&:after{
						background-color: darken(rgba($uni-color-danger, 0.1), 5);
					}
				}
				&:after{
					border-color:transparent;
				}
			}
			&.outline{
				background-color: rgba($uni-color-danger, 0);
				color: rgba($uni-color-danger, 0.8);
				&:active{
					&:after{
						background-color: darken(rgba($uni-color-danger, 0.1), 5);
					}
				}
				&:after{
					border-color: rgba($uni-color-danger, 0.2);
				}
			}
		}
	}
</style>
