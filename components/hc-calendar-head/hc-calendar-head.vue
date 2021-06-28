<template>
	<view class="hc-calendar__head">
		<view class="hc-calendar__head_week">
			<text v-for="(item, index) in weeks" :key="index">{{item}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'hc-calendar-head',
		data() {
			return {
				weeks: ['一', '二', '三', '四', '五', '六', '日']
			};
		}
	}
</script>

<style lang="scss">
.hc-calendar__head{
	font-size: $uni-calendar-fontsize;
	color: $uni-calendar-color;
	&_week{
		color: $uni-calendar-head-color;
		display:flex;
		flex-direction: row;
		align-items:center;
		justify-content: space-around;
	}
}
</style>
