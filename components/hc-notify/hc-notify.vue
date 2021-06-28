<template>
	<view class="hc-notify">
		<hc-popup :mode="mode" transparent :mask="mask" area="auto" v-model="visible" @destory="onPopupDestory">
			<hc-noticebar :close="close" :type="type" :scrollable="scrollable" @close="onClose">
				<slot></slot>
			</hc-noticebar>
		</hc-popup>
	</view>
</template>

<script>
	export default {
		name: 'hc-notify',
		props: {
			mode: {
				type: String,
				default: 'bottom'
			},
			value: {
				type: Boolean
			},
			scrollable: {
				type: Boolean
			},
			duration: {
				type: Number,
				default: 3000
			},
			type: {
				type: String
			},
			close: {
				type: Boolean
			},
			mask: {
				type: Boolean
			}
		},
		data() {
			return {
				visible: this.value
			};
		},
		created () {
		},
		methods: {
			onUpdate (v) {
				this.visible = v
				if (v && this.duration) {
					setTimeout(() => {
						this.onPopupDestory()
					}, this.duration)
				} 
			},
			onPopupDestory () {
				this.visible = false
				this.$emit('input', this.visible)
				this.$emit('close')
			},
			onClose () {
				this.visible = !this.visible
				this.$emit('input', this.visible)
				this.$emit('close')
			}
		},
		watch: {
			'value': 'onUpdate'
		}
	}
</script>

<style lang="scss">
.hc-notify{
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
