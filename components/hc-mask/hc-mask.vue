<template>
	<view :class="['hc-mask', {visible}]" @click="onClick" :style="{backgroundColor: backgroundColor}">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'hc-mask',
		props: {
			value: {
				type: Boolean,
				default: false
			},
			clickable: {
				type: Boolean,
				default: false
			},
			backgroundColor: {
				type: String
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
			},
			onClick () {
				if (this.clickable) {
					this.visible = !this.visible
					this.$emit('destory')
				}
				this.$emit('input', this.visible)
				this.$emit('click')
			}
		},
		watch: {
			'value': 'onUpdate'
		}
	}
</script>

<style lang="scss">
.hc-mask{
	position:fixed;
	top:0;
	right:0;
	bottom:0;
	left:0;
	background-color: $uni-bg-color-mask;
	z-index:-1;
	transition: 0.3s;
	opacity:0;
	&.visible{
		opacity:1;
		z-index:100;
	}
}
</style>
