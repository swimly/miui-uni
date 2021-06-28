<template>
	<view class="hc-radio-group" :class="vertical ? 'vertical' : ''" :style="Styles">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'hc-radio-group',
		props: {
			value: {
				type: [String, Array, Number, Object]
			},
			vertical: {
				type: Boolean,
				default: false
			},
			align: {
				type: String
			}
		},
		computed: {
			Styles () {
				let value = this.align == 'left' ? 'flex-start' : this.align == 'center' ? 'center' : 'flex-end'
				return {
					justifyContent: value
				}
			}
		},
		provide() {
			return {
				radio: this
			}
		},
		created() {
			this.childrens = []
		},
		methods: {
			onChange (val) {
				this.$emit('input', val)
				this.$emit('change', val)
			}
		}
	}
</script>

<style lang="scss" scoped>
.hc-radio-group{
	display:flex;
	align-items:center;
	flex-wrap: wrap;
	&.vertical{
		display:block;
	}
}
</style>
