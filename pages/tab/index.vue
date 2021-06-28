<template>
	<hc-page>
		<hc-panel>
			<hc-title>基础用法</hc-title>
			<hc-tab	v-model="tab1" @change="handleChange">
				<hc-tab-item name="all">全部</hc-tab-item>
				<hc-tab-item name="read">已读</hc-tab-item>
				<hc-tab-item name="unread">未读</hc-tab-item>
			</hc-tab>
			<text>{{tab1}}</text>
		</hc-panel>

		<hc-panel>
			<hc-title>高度，内边距/指示线宽，高，圆角</hc-title>
			<hc-tab	v-model="tab1" :indicate="{width: 40, height: 4}" gutter="40" height="120">
				<hc-tab-item name="all">全部</hc-tab-item>
				<hc-tab-item name="read">已读</hc-tab-item>
				<hc-tab-item name="unread">未读</hc-tab-item>
			</hc-tab>
			<text>{{tab1}}</text>
		</hc-panel>

		<hc-panel>
			<hc-title>对齐</hc-title>
			<hc-tab	v-model="tab1">
				<hc-tab-item name="all" style="flex:1;">全部</hc-tab-item>
				<hc-tab-item name="read" style="flex:1;">已读</hc-tab-item>
				<hc-tab-item name="unread" style="flex:1;">未读</hc-tab-item>
			</hc-tab>
			<hc-tab v-model="tab1" align="space-around">
				<hc-tab-item name="all">全部</hc-tab-item>
				<hc-tab-item name="read">已读</hc-tab-item>
				<hc-tab-item name="unread">未读</hc-tab-item>
			</hc-tab>
			<hc-tab	v-model="tab1" align="space-between">
				<hc-tab-item name="all">全部</hc-tab-item>
				<hc-tab-item name="read">已读</hc-tab-item>
				<hc-tab-item name="unread">未读</hc-tab-item>
			</hc-tab>
			<text>{{tab1}}</text>
		</hc-panel>

		<hc-panel>
			<hc-title>滚动</hc-title>
			<hc-tab v-model="tab2">
				<hc-tab-item v-for="(item, index) in data" :key="index">{{item}}</hc-tab-item>
			</hc-tab>
			<text>{{tab2}}</text>
		</hc-panel>
	</hc-page>
</template>

<script>
	export default {
		data() {
			return {
				tab1: 1,
				tab2: 2,
				data: ['全部', '推荐', '前端开发', '后端开发', 'Android', 'IOS', '实施']
			}
		},
		onLoad() {

		},
		methods: {
			handleChange (data) {
				console.log('tab切换', data)
			}
		}
	}
</script>

<style scoped>
.sep{
	padding-left:20upx;
	padding-right:20upx;
}
</style>

