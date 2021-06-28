<template>
	<hc-page>
		<hc-panel>
			<hc-title>普通</hc-title>
			<hc-switch></hc-switch>
		</hc-panel>
		<hc-panel>
			<hc-title>数据双向绑定</hc-title>
			<hc-switch v-model="check1"></hc-switch>
			<text>{{check1}}</text>
			<hc-switch size="small" v-model="check2"></hc-switch>
			<text>{{check2}}</text>
		</hc-panel>
		<hc-panel>
			<hc-title>自定义颜色</hc-title>
			<hc-switch size="small" color="#f00"></hc-switch>
		</hc-panel>
	</hc-page>
</template>

<script>
	export default {
		data() {
			return {
				check1: false,
				check2: true
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		padding: 40upx;
	}
</style>
