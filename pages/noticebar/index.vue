<template>
	<hc-page>
		<hc-panel>
			<hc-title>超出省略</hc-title>
			<hc-noticebar margin="0 0 20rpx 0">因为去除页面原生的导航，我们需要在指定页面设置去掉的样式</hc-noticebar>
		</hc-panel>
		<hc-panel>
			<hc-title>超出滚动</hc-title>
			<hc-noticebar scrollable>因为去除页面原生的导航，我们需要在指定页面设置去掉的样式</hc-noticebar>
		</hc-panel>
		<hc-panel>
			<hc-title>带小图标</hc-title>
			<hc-noticebar icon="tips">因为去除页面原生的导航，我们需要在指定页面设置去掉的样式</hc-noticebar>
		</hc-panel>
		<hc-panel>
			<hc-title>带关闭</hc-title>
			<hc-noticebar close>因为去除页面原生的导航，我们需要在指定页面设置去掉的样式</hc-noticebar>
		</hc-panel>
		<hc-panel>
			<hc-title>不同主题</hc-title>
			<hc-noticebar scrollable type="primary" margin="0 0 20rpx 0">因为去除页面原生的导航，我们需要在指定页面设置去掉的样式</hc-noticebar>
			<hc-noticebar scrollable type="warning" margin="0 0 20rpx 0">因为去除页面原生的导航，我们需要在指定页面设置去掉的样式</hc-noticebar>
			<hc-noticebar scrollable type="success" margin="0 0 20rpx 0">因为去除页面原生的导航，我们需要在指定页面设置去掉的样式</hc-noticebar>
			<hc-noticebar scrollable type="danger">因为去除页面原生的导航，我们需要在指定页面设置去掉的样式</hc-noticebar>
		</hc-panel>
		<hc-panel>
			<hc-title>自定义颜色</hc-title>
			<hc-noticebar background-color="#333" color="#ccc" margin="0 0 20rpx 0">因为去除页面原生的导航，我们需要在指定页面设置去掉的样式</hc-noticebar>
			<hc-noticebar icon="tips" close scrollable background-color="#333" color="#ccc" margin="0 0 20rpx 0">因为去除页面原生的导航，我们需要在指定页面设置去掉的样式</hc-noticebar>
			<hc-noticebar icon="tips" background-color="#333" color="#ccc" margin="0 0 20rpx 0">因为去除页面原生的导航，我们需要在指定页面设置去掉的样式</hc-noticebar>
			<hc-noticebar radius="44rpx" close background-color="#333" color="#ccc" margin="0 0 20rpx 0">因为去除页面原生的导航，我们需要在指定页面设置去掉的样式</hc-noticebar>
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
