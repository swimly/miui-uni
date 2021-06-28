<template>
	<hc-page>
		<hc-panel>
			<hc-title>操作台</hc-title>
			<hc-button type="primary" @click="show = true" margin="0 0 20rpx 0">弹出</hc-button>
			<hc-title>内容</hc-title>
			<hc-input subline v-model="text"></hc-input>
			<hc-title>位置</hc-title>
			<hc-radio-group v-model="mode">
				<hc-radio style="margin-right:20rpx;" :name="item.name" v-for="(item, index) in direction" :key="index">{{item.label}}</hc-radio>
			</hc-radio-group>
			<hc-title>计时器</hc-title>
			<hc-input subline v-model="duration"></hc-input>
			<hc-title>颜色</hc-title>
			<hc-radio-group v-model="background">
				<hc-radio style="margin-right:20rpx;" :name="item" v-for="(item, index) in colors" :key="index">
					<view class="item" :style="{backgroundColor: item}"></view>
				</hc-radio>
			</hc-radio-group>
			<hc-title>图标</hc-title>
			<hc-radio-group v-model="icon">
				<hc-radio style="margin-right:20rpx;" :name="item" v-for="(item, index) in icons" :key="index">
					<hc-icon :name="item" v-if="item"></hc-icon>
					<text v-else>无</text>
				</hc-radio>
			</hc-radio-group>
			<hc-title>图标大小</hc-title>
			<hc-input subline v-model="iconsize"></hc-input>
			<hc-toast v-model="show" :mode="mode" :duration="duration" :icon="icon" :icon-size="iconsize" :background-color="background">{{text}}</hc-toast>
		</hc-panel>
	</hc-page>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				text: '登录成功',
				direction: [{
					name: 'bottom',
					label: '底部'
				}, {
					name: 'top',
					label: '顶部'
				}, {
					name: 'center',
					label: '中间'
				}],
				colors: ['rgba(0,0,0,0.7)', '#007aff', '#4cd964', '#f0ad4e', '#dd524d'],
				icons: ['', 'tips', 'close-circle', 'checkbox'],
				icon: '',
				background: 'rgba(0,0,0,0.7)',
				mode: 'bottom',
				duration: 3000,
				iconsize: 64
			}
		},
		onLoad() {

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