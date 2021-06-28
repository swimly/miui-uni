<template>
	<hc-page>
		<hc-panel>
			<hc-title>普通用法</hc-title>
			<hc-button type="primary" @click="show = true" margin="0 0 20rpx 0">支付方式</hc-button>
			<hc-title>位置</hc-title>
			<hc-radio-group v-model="mode">
				<hc-radio style="margin-right:20rpx;" :name="item.name" v-for="(item, index) in direction" :key="index">{{item.label}}</hc-radio>
			</hc-radio-group>
			<hc-title>主题</hc-title>
			<hc-radio-group v-model="type">
				<hc-radio style="margin-right:20rpx;" :name="item.name" v-for="(item, index) in types" :key="index">{{item.label}}</hc-radio>
			</hc-radio-group>
			<hc-title>定时器</hc-title>
			<hc-input v-model="duration" subline margin="0 0 20rpx 0"></hc-input>
			<hc-title>关闭按钮</hc-title>
			<hc-switch v-model="close"></hc-switch>
			<hc-title>显示遮罩</hc-title>
			<hc-switch v-model="mask"></hc-switch>
			<hc-title>内容滚动</hc-title>
			<hc-switch v-model="scrollable"></hc-switch>
			<hc-title>内容</hc-title>
			<hc-input v-model="text" subline margin="0 0 20rpx 0"></hc-input>
			<hc-notify :mask="mask" :mode="mode" v-model="show" :scrollable="scrollable" :close="close" :duration="durations" :type="type">{{text}}</hc-notify>
		</hc-panel>
	</hc-page>
</template>

<script>
	export default {
		computed: {
			durations () {
				return parseInt(this.duration)
			}
		},
		data() {
			return {
				mask: false,
				direction: [{
					name: 'bottom',
					label: '底部'
				}, {
					name: 'top',
					label: '顶部'
				}],
				types: [{
					name: '',
					label: '默认'
				}, {
					name: 'primary',
					label: 'primary'
				}, {
					name: 'warning',
					label: 'warning'
				}, {
					name: 'success',
					label: 'success'
				}, {
					name: 'danger',
					label: 'danger'
				}],
				type: '',
				duration: 3000,
				close: false,
				mode: 'top',
				show: false,
				text: ' 循环中设置动画时，必须要定义一个变量，将animation对象存储一下，然后用这个变量调用export方法存入数组，才好用。',
				scrollable: false
			}
		},
		onLoad() {

		},
		methods: {
			onDuration (v) {
				if (v == 0) {
					this.close = true
				}
			},
			onClose (v) {
				if (v) {
					this.duration = 0
				} else {
					this.duration = 3000
				}
			}
		},
		watch: {
			'duration': 'onDuration',
			'close': 'onClose'
		}
	}
</script>
