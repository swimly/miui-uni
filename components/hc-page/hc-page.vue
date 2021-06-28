<template>
	<view class="hc-page">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'hc-page',
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.hc-page{
	min-height:100%;
	flex:1;
	background-color: #F3F4F5;
	box-sizing: border-box;
}
</style>
