<template>
	<view class="hc-badge">
		<slot></slot>
		<text class="hc-badge__number">{{value}}</text>
	</view>
</template>

<script>
	export default {
		name: 'hc-badge',
		props: {
			value: {
				type: Number
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.hc-badge{
	display:inline-block;
	position:relative;
	&__number{
		display:inline-flex;
		background-color: $uni-badge-color;
		font-size: $uni-badge-fontsize;
		color: $uni-text-color-inverse;
		height: $uni-badge-size;
		min-width: $uni-badge-size;
		z-index:10;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		border-radius: $uni-badge-fontsize;
		position:absolute;
		padding: 0 $uni-badge-size * 0.2;
		top:0;
		right:0;
		transform: translate(90%, -20%);
	}
}
</style>
