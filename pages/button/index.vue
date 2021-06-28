<template>
	<hc-page>
		<hc-panel>
			<hc-title>普通按钮</hc-title>
			<hc-button margin="0 0 20rpx 0">按钮</hc-button>
			<hc-button type="primary" margin="0 0 20rpx 0">按钮</hc-button>
			<hc-button type="warning" margin="0 0 20rpx 0">按钮</hc-button>
			<hc-button type="success" margin="0 0 20rpx 0">按钮</hc-button>
			<hc-button type="danger" margin="0 0 20rpx 0">按钮</hc-button>
		</hc-panel>
		<hc-panel>
			<hc-title>水波纹</hc-title>
			<hc-button type="primary" ripple margin="0 0 20rpx 0">按钮</hc-button>
		</hc-panel>
		<hc-panel>
			<hc-title>开放功能</hc-title>
			<hc-button type="primary" outline margin="0 0 20rpx 0" open-type="getPhoneNumber">获取手机号码</hc-button>
			<hc-button type="primary" outline margin="0 0 20rpx 0" open-type="getUserInfo">获取用户信息</hc-button>
			<hc-button type="primary" outline margin="0 0 20rpx 0" open-type="launchApp">打开app</hc-button>
			<hc-button type="primary" outline margin="0 0 20rpx 0" open-type="openSetting">打开设置</hc-button>
		</hc-panel>
		<hc-panel>
			<hc-title>加载中</hc-title>
			<hc-button loading margin="0 0 20rpx 0">按钮</hc-button>
			<hc-button loading type="primary" margin="0 0 20rpx 0">按钮</hc-button>
			<hc-button loading type="primary" plain margin="0 0 20rpx 0">按钮</hc-button>
			<hc-button loading type="primary" light margin="0 0 20rpx 0">按钮</hc-button>
			<hc-button loading type="primary" outline size="small" margin="0 0 20rpx 0">按钮</hc-button>
		</hc-panel>
		<hc-panel>
			<hc-title>不同弧度</hc-title>
			<hc-button conner margin="0 0 20rpx 0">按钮</hc-button>
			<hc-button rounder margin="0 0 20rpx 0">按钮</hc-button>
			<hc-button conner icon="shuaxin" type="primary" margin="0 0 20rpx 0">按钮</hc-button>
		</hc-panel>
		<hc-panel>
			<hc-title>带图标</hc-title>
			<hc-button conner icon="aixin" margin="0 0 20rpx 0">按钮</hc-button>
			<hc-button rounder margin="0 0 20rpx 0">按钮</hc-button>
			<hc-button conner icon="shuaxin" type="primary" margin="0 0 20rpx 0">按钮</hc-button>
		</hc-panel>
		<hc-panel>
			<hc-title>朴素按钮</hc-title>
			<hc-button type="primary" plain margin="0 0 20rpx 0">按钮</hc-button>
			<hc-button type="warning" plain margin="0 0 20rpx 0">按钮</hc-button>
			<hc-button type="success" plain margin="0 0 20rpx 0">按钮</hc-button>
			<hc-button type="danger" plain margin="0 0 20rpx 0">按钮</hc-button>
		</hc-panel>
		<hc-panel>
			<hc-title>简洁按钮</hc-title>
			<hc-button type="primary" light margin="0 0 20rpx 0">按钮</hc-button>
			<hc-button type="warning" light margin="0 0 20rpx 0">按钮</hc-button>
			<hc-button type="success" light margin="0 0 20rpx 0">按钮</hc-button>
			<hc-button type="danger" light margin="0 0 20rpx 0">按钮</hc-button>
		</hc-panel>
		<hc-panel>
			<hc-title>线条按钮</hc-title>
			<hc-button type="primary" outline margin="0 0 20rpx 0">按钮</hc-button>
			<hc-button type="warning" outline margin="0 0 20rpx 0">按钮</hc-button>
			<hc-button type="success" outline margin="0 0 20rpx 0">按钮</hc-button>
			<hc-button type="danger" outline margin="0 0 20rpx 0">按钮</hc-button>
		</hc-panel>
		<hc-panel>
			<hc-title>不同尺寸</hc-title>
			<hc-button size="mini">mini按钮</hc-button>
			<hc-button size="small" conner type="danger" plain>mini按钮</hc-button>
			<hc-button size="medium">mini按钮</hc-button>
		</hc-panel>
	</hc-page>
</template>

<script>
	export default {
		data() {
			return {
				check1: false,
				check2: true,
				style: {
					marginBottom: '20rpx'
				}
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

