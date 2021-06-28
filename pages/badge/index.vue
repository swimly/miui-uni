<template>
	<hc-page>
		<hc-panel>
			<hc-title>普通用法</hc-title>
			<hc-badge :value="3">
				<text>消息</text>
			</hc-badge>
			<hc-badge :value="34">
				<hc-button size="small" type="primary">提交</hc-button>
			</hc-badge>
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
