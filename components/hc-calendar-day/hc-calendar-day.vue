<template>
	<view :class="['hc-calendar__day', {isMonth, isCurrent}]" :month="month">
		<text>{{dayString}}</text>
	</view>
</template>

<script>
	export default {
		name: 'hc-calendar-day',
		props: {
			isCurrent: {
				type: Boolean
			},
			month: {
				type: [String, Number]
			},
			isMonth: {
				type: Boolean
			},
			day: {
				type: [String, Number]
			}
		},
		data() {
			return {
				dayString: this.day
			};
		},
		created () {
		},
		methods: {
			updateDay (v) {
				this.dayString = v
			}
		},
		watch: {
			'day': 'updateDay'
		}
	}
</script>

<style lang="scss">
:host{
	font-size: $uni-calendar-fontsize;
	color: $uni-calendar-head-color;
	flex:1;
	display:flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.hc-calendar__day{
	font-size: $uni-calendar-fontsize;
	color: $uni-calendar-head-color;
	flex:1;
	display:flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: $uni-calendar-fontsize * 0.4 0;
	&.isMonth{
		color: $uni-calendar-color;
		&.isCurrent{
			color: $uni-color-primary;
		}
	}
}
</style>
