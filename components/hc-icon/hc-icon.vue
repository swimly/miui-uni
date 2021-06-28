<template>
	<view
		@click="onClick"
		:class="['iconfont', `icon-${name}`, {'loading': spin}]"
		:style="{fontSize: `${size}rpx`, color: color, display: name ? '' : 'none', margin: margin}"
	></view>
</template>

<script>
	export default {
		name: 'hc-icon',
		props: {
			name: {
				type: String
			},
			size: {
				type: [Number, String]
			},
			color: {
				type: String
			},
			spin: {
				type: Boolean
			},
			margin: {
				type: String
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			onClick (e) {
				console.log('触发点击')
				this.$emit('click', e)
			}
		}
	}
</script>

<style lang="scss">
@import './iconfont.css';
.iconfont{
	display:inline-block;
	font-size:36rpx;
	&.loading{
		transition:0.3s;
		transform-origin: center center ;
		animation: loading 1s linear infinite;
	}
}

@keyframes loading {
	to {
		transform: rotate(360deg);
	}
}
</style>