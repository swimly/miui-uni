<template>
	<hc-page>
		<hc-panel>
			<hc-title>普通</hc-title>
			<hc-form>
				<hc-form-item label="姓名" align="right">
					<hc-input align="right" light placeholder="请输入用户名"></hc-input>
				</hc-form-item>
				<hc-form-item label="性别" align="right">
					<hc-radio-group align="right">
						<hc-radio name="man">男</hc-radio>
						<hc-radio name="woman" margin="0 0 0 20rpx">女</hc-radio>
					</hc-radio-group>
				</hc-form-item>
				<hc-form-item label="手机号码" align="right">
					<hc-input align="right" light placeholder="请输入用户名"></hc-input>
				</hc-form-item>
				<hc-form-item label="手机号码" align="right">
					<hc-switch></hc-switch>
				</hc-form-item>
			</hc-form>
		</hc-panel>
	</hc-page>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
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
