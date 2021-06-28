<template>
	<view :class="['hc-switch', size, {'checked': active}]" @click="onClick">
		<view class="hc-switch__core" :style="[active ? {backgroundColor: color} : {}]"></view>
		<text class="hc-switch__label">{{label}}</text>
	</view>
</template>

<script>
	export default {
		name: 'hc-switch',
		props: {
			value: {
				type: Boolean
			},
			size: {
				type: String
			},
			color: {
				type: String
			},
			label: {
				type: String
			}
		},
		data() {
			return {
				active: this.value
			};
		},
		methods: {
			onClick () {
				this.active = !this.active
				this.$emit('input', this.active)
			}
		}
	}
</script>

<style lang="scss">
.hc-switch{
	display:inline-flex;
	align-items:center;
	&.small{
		.hc-switch__core{
			transform-origin: left center;
			transform: scale(0.8);
		}
	}
	&__core{
		width: $uni-switch-width;
		height: $uni-switch-height;
		border-radius: $uni-switch-height / 2;
		background-color: $uni-switch-bg;
		position:relative;
		transition:0.3s;
		display:flex;
		&:before{
			content:"";
			display:inline-block;
			width: $uni-switch-size;
			height: $uni-switch-size;
			background-color: $uni-bg-color;
			border-radius:50%;
			position:absolute;
			top: 50%;
			left: 0;
			transform: translate3d(($uni-switch-height - $uni-switch-size) / 2, -50%, 0);
			transition: 0.3s;
		}
	}
	&.checked{
		.hc-switch__core{
			background-color: $uni-switch-active;
			&:before{
				transform: translate3d($uni-switch-width - $uni-switch-size - ($uni-switch-height - $uni-switch-size) / 2, -50%, 0);
			}
		}
	}
}
</style>
