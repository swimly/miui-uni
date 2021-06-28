<template>
	<view class="hc-radio" 
		:class="{'line' : line}"
		:style="{padding: padding, margin: margin, height: height}"
		@click="handleChange">
		<view class="hc-radio-inner"
			:class="{'reverse': reverse}"
			:style="{alignItems: align == 'top' ? 'flex-start' : align == 'bottom' ? 'flex-end' : 'center'}">
			<hc-icon
				v-if="showIcon"
				class="hc-radio__icon" 
				:name="check ? 'radio' : 'uncheck'" 
				:class="check ? 'active' : ''"
				:style="{color: check ? activeColor: ''}"
				:size="size">
			</hc-icon>
			<view class="hc-radio__frame">
				<slot></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'hc-radio',
		props: {
			name: String,
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
				check: false
			}
		},
		inject: ['radio'],
		mounted() {
			this.radio.childrens.push(this)

			if (this.radio.value == this.name) {
				this.check = true
			}
		},
		methods: {
			handleChange () {
				this.radio.childrens.map((vm, index) => {
					vm.check = false
				})
				this.check = true
				this.radio.onChange && this.radio.onChange(this.name)
			}
		}
	}
</script>

<style lang="scss" scoped>
.hc-radio{
	display:flex;
	min-height: $uni-input-height;
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
		color: $uni-radio-default-color;
		margin-right:$uni-radio-margin;
		&.active{
			color: $uni-radio-active-color;
		}
	}
	&__frame{
		flex:1;
		font-size:$uni-radio-fontsize;
	}
}
</style>
