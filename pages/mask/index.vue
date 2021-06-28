<template>
	<hc-page>
		<hc-panel>
			<hc-title>普通用法</hc-title>
			<hc-button type="primary" @click="mask1 = true">打开遮罩</hc-button>
			<hc-title>点击关闭</hc-title>
			<hc-switch v-model="click"></hc-switch>
			<hc-title>颜色</hc-title>
			<hc-radio-group v-model="background">
				<hc-radio style="margin-right:20rpx;" :name="item" v-for="(item, index) in colors" :key="index">
					<view class="item" :style="{backgroundColor: item}"></view>
				</hc-radio>
			</hc-radio-group>
			<hc-mask v-model="mask1" :clickable="click" :background-color="background"></hc-mask>
		</hc-panel>
	</hc-page>
</template>

<script>
	export default {
		data() {
			return {
				mask1: false,
				click: true,
				colors: ['rgba(0,0,0,0.7)', '#007aff', '#4cd964', '#f0ad4e', '#dd524d'],
				background: 'rgba(0,0,0,0.7)'
			}
		},
		methods: {
		}
	}
</script>
<style>
	.item{
		width:32rpx;
		height:32rpx;
		border-radius:8rpx;
	}
</style>
