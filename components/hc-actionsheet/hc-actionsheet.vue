<template>
	<view class="hc-actionsheet">
		<slot></slot>
		<hc-popup v-model="visible" @destory="onPopupDestory">
			<view class="hc-actionsheet__content">
				<view class="hc-actionsheet__item" v-for="(item, index) in data" :key="index">
					<text class="hc-actionsheet__item_label">{{item.label}}</text>
				</view>
			</view>
			<view class="hc-actionsheet__footer">
				<hc-button rounder>{{cancelLabel}}</hc-button>
			</view>
		</hc-popup>
	</view>
</template>

<script>
	export default {
		name: 'hc-actionsheet',
		props: {
			data: {
				type: Array
			},
			value: {
				type: Boolean
			},
			cancel: {
				type: Boolean
			},
			cancelLabel: {
				type: String,
				default: '取消'
			}
		},
		data() {
			return {
				visible: this.value
			};
		},
		methods: {
			onUpdate (v) {
				this.visible = v
			},
			onPopupDestory () {
				this.visible = false
				this.$emit('input', this.visible)
			}
		},
		watch: {
			'value': 'onUpdate'
		}
	}
</script>

<style lang="scss">
.hc-actionsheet{
	&__content{
		padding: $uni-actionsheet-fontsize;
		padding-bottom: 0;
	}
	&__footer{
		padding: $uni-actionsheet-fontsize;
	}
	&__item{
		height: $uni-actionsheet-height;
		display:flex;
		flex-direction: row;
		align-items: center;
		&_label{
			font-size: $uni-actionsheet-fontsize;
			color: $uni-actionsheet-color;
		}
	}
}
</style>
