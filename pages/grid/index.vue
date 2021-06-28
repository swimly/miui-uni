<template>
	<hc-page>
		<hc-panel>
			<hc-title>普通用法</hc-title>
			<hc-grid>
				<hc-grid-item :span="12">
					<text>12</text>
				</hc-grid-item>
				<hc-grid-item :span="12">
					<text>12</text>
				</hc-grid-item>
				<hc-grid-item :span="8">
					<text>8</text>
				</hc-grid-item>
				<hc-grid-item :span="16">
					<text>16</text>
				</hc-grid-item>
			</hc-grid>
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
