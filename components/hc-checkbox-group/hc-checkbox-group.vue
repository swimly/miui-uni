<template>
	<view class="hc-checkbox-group" :class="vertical ? 'vertical' : ''">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'hc-checkbox-group',
		props: {
			value: {
				type: [String, Array, Number, Object]
			},
			vertical: {
				type: Boolean,
				default: false
			}
		},
		provide() {
			return {
				checkbox: this
			}
		},
		created() {
			this.childrens = []
		},
		methods: {
			onChange (data) {
				this.$emit('input', data)
				this.$emit('change', data)
			}
		}
	}
</script>

<style lang="scss" scoped>
.hc-checkbox-group{
	display:flex;
	align-items:center;
	flex-wrap: wrap;
	&.vertical{
		display:block;
	}
}
</style>
