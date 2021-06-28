<template>
	<view class="hc-toast">
		<hc-mask v-model="visible" backgroundColor="rgba(0,0,0,0)"></hc-mask>
		<view
			:class="['hc-toast__content', mode, {visible, icon: icon}]"
			:style="{backgroundColor:backgroundColor}"
		>
			<hc-icon :size="iconSize" :name="icon" v-if="icon"></hc-icon>
			<text class="hc-toast__text">
				<slot></slot>
			</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'hc-toast',
		props: {
			value: {
				type: Boolean
			},
			mode: {
				type: String,
				default: 'bottom'
			},
			duration: {
				type: Number,
				default: 3000
			},
			backgroundColor: {
				type: String
			},
			icon: {
				type: String
			},
			iconSize: {
				type: Number,
				default: 64
			}
		},
		data() {
			return {
				visible: this.value
			};
		},
		created () {
		},
		methods: {
			valueUpdate (v) {
				this.visible = v
				if (v && this.duration) {
					setTimeout(() => {
						this.visible = !this.visible
						this.$emit('input', this.visible)
						this.$emit('destory')
					}, this.duration)
				}
			}
		},
		watch: {
			'value': 'valueUpdate'
		}
	}
</script>

<style lang="scss">
.hc-toast{
	&__content{
		position:fixed;
		top:50%;
		left:50%;
		display:flex;
		flex-direction: column;
		align-items: center;
		font-size: $uni-toast-fontsize;
		background-color: $uni-toast-background;
		color: $uni-text-color-inverse;
		padding: $uni-toast-fontsize * 0.4 $uni-toast-fontsize;
		border-radius: $uni-toast-radius;
		transform: translate(-50%,0);
		transition:0.3s;
		z-index:-1;
		opacity:0;
		&.icon{
			padding: $uni-toast-fontsize $uni-toast-fontsize $uni-toast-fontsize * 0.5 $uni-toast-fontsize;
			.hc-toast__text{
				margin: $uni-toast-fontsize * 0.5;
			}
		}
		&.top{
			top:10%;
		}
		&.center{
			top:50%;
		}
		&.bottom{
			top:90%;
		}
		&.visible{
			z-index:101;
			transform: translate(-50%, -50%);
			opacity:1;
		}
	}
	&__text{
		word-break: break-all;
	}
}
</style>
