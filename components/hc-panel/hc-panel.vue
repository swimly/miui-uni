<template>
	<view class="hc-panel"><slot></slot></view>
</template>

<script>
	export default {
		name: 'hc-panel',
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.hc-panel{
	box-shadow:0px 0px $uni-panel-margin #F6F8FD  ;
	background-color: $uni-bg-color;
	border-radius:$uni-border-radius-base;
	margin-bottom:$uni-panel-margin;
	padding:$uni-panel-padding;
}
</style>
