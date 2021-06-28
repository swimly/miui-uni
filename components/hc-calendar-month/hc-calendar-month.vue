<template>
	<view class="hc-calendar__month" :month="month">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'hc-calendar-month',
		props: {
			month: {
				type: [Number, String]
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.hc-calendar__month{
	flex-shrink: 0;
	height:100%;
	display:flex;
	flex-direction: column;
	justify-content: space-between;
}
</style>
