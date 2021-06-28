<template>
	<hc-page>
		<hc-panel>
			<hc-title>普通用法</hc-title>
			<hc-button type="success" plain @click="show = true">支付方式</hc-button>
			<hc-actionsheet :data="list" v-model="show"></hc-actionsheet>
		</hc-panel>
	</hc-page>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					label: '支付宝'
				}, {
					label: '微信'
				}, {
					label: '银联'
				}],
				show: false
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>
