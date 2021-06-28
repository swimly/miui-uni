<template>
	<hc-page>
		<hc-panel>
			<hc-title>默认输入框</hc-title>
			<hc-input v-model="form.name" placeholder="请填写姓名!"></hc-input>
			<text>{{form.name}}</text>
		</hc-panel>
		<hc-panel>
			<hc-title>不同形状</hc-title>
			<hc-input conner v-model="form.name" placeholder="请填写姓名!" :styles="style"></hc-input>
			<hc-input rounder v-model="form.name" placeholder="请填写姓名!" :styles="style"></hc-input>
			<hc-input subline v-model="form.name" placeholder="请填写姓名!" :styles="style"></hc-input>
			<hc-input light v-model="form.name" placeholder="请填写姓名!" :styles="style"></hc-input>
		</hc-panel>
		<hc-panel>
			<hc-title>带图标</hc-title>
			<hc-input placeholder="请填写姓名!" suffix-icon="dingwei" :styles="style"></hc-input>
			<hc-input subline placeholder="请填写姓名!" prefix-icon="dingwei" :styles="style"></hc-input>
		</hc-panel>
		<hc-panel>
			<hc-title>右对齐</hc-title>
			<hc-input placeholder="请填写姓名!" align="right" :styles="style"></hc-input>
			<hc-input subline placeholder="请填写姓名!" prefix-icon="dingwei" align="right" :styles="style"></hc-input>
		</hc-panel>
		<hc-panel>
			<hc-title>前后带文字</hc-title>
			<hc-input subline placeholder="请填写姓名!" prefix-label="验证码" suffix-label="发送验证码" :styles="style"></hc-input>
			<hc-input subline placeholder="请填写姓名!" prefix-label="手机号" :styles="style"></hc-input>
		</hc-panel>
		<hc-panel>
			<hc-title>带清空按钮</hc-title>
			<hc-input placeholder="请填写姓名!" prefix-label="验证码" clearable :styles="style"></hc-input>
			<hc-input subline placeholder="请填写姓名!" prefix-label="手机号" clearable :styles="style"></hc-input>
			<hc-input subline placeholder="请填写姓名!" prefix-label="手机号" suffix-label="发送验证码" clearable :styles="style"></hc-input>
			<hc-input subline placeholder="请填写姓名!" prefix-label="手机号" clearable :styles="style">
				<hc-button slot="suffix" type="primary" size="small" rounder outline>发送验证码</hc-button>
			</hc-input>
		</hc-panel>
		<hc-panel>
			<hc-title>限制输入</hc-title>
			<hc-input subline placeholder="请填写姓名!" prefix-label="验证码" :max-length="6" :styles="style"></hc-input>
			<hc-input subline placeholder="请填写姓名!" prefix-label="手机号" :max-length="6" clearable :styles="style"></hc-input>
		</hc-panel>
		<hc-panel>
			<hc-title>不同主题</hc-title>
			<hc-input placeholder="请填写姓名!" type="primary" :styles="style"></hc-input>
			<hc-input placeholder="请填写姓名!" type="warning" :styles="style"></hc-input>
			<hc-input placeholder="请填写姓名!" type="success" :styles="style"></hc-input>
			<hc-input placeholder="请填写姓名!" type="danger" :styles="style"></hc-input>
		</hc-panel>
	</hc-page>
</template>

<script>
	export default {
		data() {
			return {
				style: {
					marginBottom: '20rpx'
				},
				check1: false,
				check2: true,
				form: {
					name: ''
				}
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
