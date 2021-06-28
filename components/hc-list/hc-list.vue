<template>
	<view class="hc-list">
		<view class="hc-list__cover"></view>
		<view class="hc-list__content">
			<text class="hc-list__title">{{title}}</text>
			<text class="hc-list__time">{{time}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'hc-list',
		props: {
			title: {
				type: String
			},
			time: {
				type: String
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.hc-list{
	display:flex;
	flex-direction: row;
	align-items:flex-start;
	&__content{
		flex:1;
		display:flex;
		flex-direction: column;
	}
	&__title{
		font-size: $uni-list-title-fontsize;
		color: $uni-list-title-color;
		overflow:hidden;
		text-overflow: ellipsis;
		display:-webkit-box;
	}
	&__time{
		font-size: $uni-list-time-fontsize;
		color: $uni-list-time-color;
	}
}
</style>
