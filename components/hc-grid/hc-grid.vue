<template>
	<view class="hc-grid">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'hc-grid',
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.hc-grid{
	display:flex;
	flex-direction: row;
	align-items:flex-start;
	flex-wrap: wrap;
}
</style>
