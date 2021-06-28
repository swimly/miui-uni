<template>
	<view class="hc-calendar__week" :style="{width: `${width}px`}">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'hc-calendar-week',
		props: {
			width: {
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
:host{
	display:flex;
	flex-direction: row;
	align-items: center;
	flex-shrink: 0;
}
.hc-calendar__week{
	display:flex;
	flex-direction: row;
	align-items: center;
	flex-shrink: 0;
	background-color: #f00;
}
</style>
