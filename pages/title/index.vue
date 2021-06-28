<template>
	<hc-page>
		<hc-panel>
			<hc-title>普通用法</hc-title>
			<hc-title icon="chuangzuo">普通用法</hc-title>
			<hc-title more="更多">后面有更多</hc-title>
			<hc-title more="更多" more-color="#f00">自定义更多颜色</hc-title>
			<hc-title more="更多" color="#007aff">自定义标题颜色</hc-title>
			<hc-title more="更多">
				<text>自定义标题颜色</text>
				<hc-button slot="more" type="primary" rounder size="mini" outline>更多</hc-button>
			</hc-title>
			<hc-title more="更多">
				<text>自定义标题颜色</text>
				<hc-icon name="gengduo" slot="more"></hc-icon>
			</hc-title>
			<hc-title subline>带下划线的标题</hc-title>
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
