<template>
	<view class="hc-grid__item" :style="{width: `${span/24*100}%`}">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'hc-grid-item',
		props: {
			span: {
				type: Number,
				default: 24
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
:root{
	display:inline-flex;
}
</style>
