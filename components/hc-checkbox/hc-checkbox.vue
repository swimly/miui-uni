<template>
	<view class="hc-checkbox"
		:class="{'line' : line}"
		:style="{padding: padding, margin: margin, height: height}"
		@click="handleChange">
		<view class="hc-checkbox-inner" 
			:class="{'reverse' : reverse}"
			:style="{alignItems: align == 'top' ? 'flex-start' : align == 'bottom' ? 'flex-end' : 'center'}">
			<hc-icon
				v-if="showIcon"
				class="hc-checkbox__icon" 
				:name="check ? 'checkbox' : 'uncheck'" 
				:class="check ? 'active' : ''"
				:style="{color: check ? activeColor: ''}"
				:size="size">
			</hc-icon>
			<view class="hc-checkbox__frame">
				<slot></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'hc-checkbox',
		props: {
			value: { // 是否选中
				type: Boolean,
				default: false
			},
			name: String, // 标识
			size: { // 图标大小
				type: [String, Number],
				default: 44
			},
			height: String, // 固定高度
			padding: String, // padding
			margin: String, // margin
			line: { // 每行是否有线条
				type: Boolean,
				default: false
			},
			reverse: { // icon反向
				type: Boolean,
				default: false
			},
			activeColor: { // 激活颜色
				type: String
			},
			align: { // 垂直方向对齐方式，top/center/bottom
				type: String,
				default: 'center'
			},
			showIcon: {
				type: Boolean,
				default: true
			}
		},
		data () {
			return {
				check: this.value
			}
		},
		inject: ['checkbox'],
		mounted() {
			this.checkbox.childrens.push(this)

			if (this.checkbox.value && this.checkbox.value.indexOf(this.name) !== -1) {
				this.check = true
			}
		},
		methods: {
			handleChange () {
				this.check = !this.check
				this.$emit('input', this.check)
				this.$emit('change', this.check)

				if (!this.checkbox.value) return;
				let arr = [...this.checkbox.value]
				if (this.check) {
					arr.push(this.name)
				} else {
					arr.splice(arr.indexOf(this.name), 1)
				}
				this.checkbox.onChange && this.checkbox.onChange(arr)
			}
		}
	}
</script>

<style lang="scss" scoped>
.hc-checkbox{
	display:flex;
	padding:30upx 0;
	align-items:center;
	box-sizing:border-box;
	&.line{
		border-bottom:1upx solid $uni-checkbox-default-color;
	}
	&-inner{
		width:100%;
		display:flex;
		&.reverse{
			flex-direction:row-reverse;
		}
	}
	&__icon{
		color: $uni-checkbox-default-color;
		margin-right:$uni-checkbox-margin;
		&.active{
			color: $uni-checkbox-active-color;
		}
	}
	&__frame{
		flex:1;
		font-size:$uni-checkbox-fontsize;
	}
}
</style>
