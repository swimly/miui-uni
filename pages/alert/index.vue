<template>
	<hc-page>
		<hc-panel>
			<hc-title>普通用法</hc-title>
			<hc-button type="primary" @click="alert = true" margin="0 0 20rpx 0">打开</hc-button>
			<hc-title>内容</hc-title>
			<hc-input subline v-model="text"></hc-input>
			<hc-title>倒计时关闭</hc-title>
			<hc-input subline v-model="duration"></hc-input>
			<hc-title>效果</hc-title>
			<hc-radio-group v-model="effect">
				<hc-radio :name="item.name" v-for="(item, index) in effects" :key="index" style="margin-right:40upx;">{{item.label}}</hc-radio>
			</hc-radio-group>
			<hc-title>底部按钮</hc-title>
			<hc-checkbox-group v-model="footer">
				<hc-checkbox :name="item.name" v-for="(item, index) in footers" :key="index" style="margin-right:40upx;">{{item.label}}</hc-checkbox>
			</hc-checkbox-group>
			<hc-title>垂直按钮</hc-title>
			<hc-switch v-model="vertical"></hc-switch>
			<hc-title>关闭按钮</hc-title>
			<hc-switch v-model="close"></hc-switch>
			<hc-alert v-model="alert" :effect="effect" :buttons="footer" :close="close" :vertical="vertical" :duration="duration" title="提示">{{text}}</hc-alert>
		</hc-panel>
	</hc-page>
</template>

<script>
	export default {
		data() {
			return {
				close: false,
				duration: 0,
				text: '您确定要删除该条数据吗！',
				alert: false,
				effect: 'zoomIn',
				effects: [{
					name: 'fadeIn',
					label: '渐隐'
				}, {
					name: 'zoomIn',
					label: '放大'
				}, {
					name: 'slideInDown',
					label: '掉落'
				}, {
					name: 'slideInUp',
					label: '升起'
				}, {
					name: 'zoomInDown',
					label: '放大掉落'
				}, {
					name: 'zoomInUp',
					label: '放大升起'
				}, {
					name: 'magical',
					label: '神奇效果'
				}],
				footers: [{
					name: '取消',
					label: '取消'
				}, {
					name: '确定',
					label: '确定'
				}, {
					name: '知道了',
					label: '知道了'
				}, {
					name: '关闭',
					label: '关闭'
				}],
				footer: ['关闭'],
				vertical: false
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>
