<template>
	<hc-page>
		<hc-panel>
			<hc-title>普通用法</hc-title>
			<hc-button type="primary" @click="pop1 = true" margin="0 0 20rpx 0">弹起</hc-button>
			<hc-title>方向</hc-title>
			<hc-radio-group v-model="mode">
				<hc-radio :name="item.name" v-for="(item, index) in direction" :key="index">{{item.label}}</hc-radio>
			</hc-radio-group>
			<hc-title>背景透明</hc-title>
			<hc-switch v-model="transparent">是否透明</hc-switch>
			<hc-title>圆角大小</hc-title>
			<hc-input subline v-model="radius"></hc-input>
			<hc-title>点击遮罩关闭</hc-title>
			<hc-switch v-model="clickable">是否透明</hc-switch>
			<hc-title>宽高</hc-title>
			<hc-input subline v-model="area"></hc-input>
			<hc-popup v-model="pop1" :mode="mode" :border-radius="radius" :clickable="clickable" :area="area" :transparent="transparent"></hc-popup>
		</hc-panel>
	</hc-page>
</template>

<script>
	export default {
		data() {
			return {
				pop1: false,
				mode: 'bottom',
				area: '30%',
				transparent: false,
				clickable: true,
				radius: 0,
				direction: [{
					name: 'bottom',
					label: '底部'
				}, {
					name: 'top',
					label: '顶部'
				}, {
					name: 'left',
					label: '左边'
				}, {
					name: 'right',
					label: '右边'
				}]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>
