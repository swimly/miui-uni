<template>
	<hc-page>
		<hc-panel>
			<hc-title>加载动画</hc-title>
			<hc-icon margin="10rpx" name="loading-line" spin></hc-icon>
			<hc-icon margin="10rpx" name="loading-half" spin></hc-icon>
			<hc-icon margin="10rpx" name="loading-circle" spin></hc-icon>
		</hc-panel>
		<hc-panel>
			<hc-title>自定义大小、颜色</hc-title>
			<hc-icon name="collection" size="64" color="#e90000"></hc-icon>
		</hc-panel>
		<hc-panel>
			<hc-title>普通用法</hc-title>
			<hc-grid>
				<hc-grid-item :span="8" class="item" v-for="(item, index) in icons" :key="index">
					<hc-icon :size="48" color="#666" :name="item"></hc-icon>
					<text class="name">{{item}}</text>
				</hc-grid-item>
			</hc-grid>
		</hc-panel>
	</hc-page>
</template>

<script>
	export default {
		data() {
			return {
				icons: ['add-circle', 'minus-circle', 'add', 'minus', 'sort-desc', 'sort-asc', 'toggle-right', 'toggle-left', 'arrow-right', 'arrow-up', 'arrow-left', 'arrow-down', 'start', 'trangle-up', 'trangle-right', 'trangle-left', 'trangle-down', 'loading-circle', 'loading-half', 'loading-line', 'collection-fill', 'collection', 'save', 'share', 'record', 'password', 'copy', 'scan', 'upload', 'delete', 'more', 'refresh', 'search', 'tips', 'user', 'camera', 'message', 'setting', 'application', 'users', 'thumb', 'close-circle', 'question', 'edit', 'mute', 'volume', 'home', 'close-circle-fill', 'radio', 'checkbox', 'uncheck', 'add-circle-fill', 'location']
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>
<style lang="scss" scoped>
	.item{
		display:flex;
		flex-direction: column;
		align-items:center;
		padding:20rpx 0;
	}
	.name{
		font-size:24rpx;
		margin-top:10rpx;
	}
</style>
