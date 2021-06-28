<template>
	<view class="hc-tab__item"
		:class="active ? 'active' : ''"
		:id="elId" 
		:style="{padding: `0 ${tabGutter}rpx`, height: `${tabHeight}rpx`}"
		@click="handleChange">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'hc-tab-item',
		props: {
			name: {
				type: String
			},
			gutter: { // 每个tab标签的左右边距，默认20
				type: [Number, String],
				default: ''
			}
		},
		inject: ['tab'],
		computed: {
			tabGutter () {
				return this.gutter ? this.gutter : (this.tab.gutter ? this.tab.gutter : 20)
			},
			tabHeight () {
				return this.tab.height
			}
		},
		data () {
			const elId = `Uni_${Math.ceil(Math.random() * 10e5).toString(36)}`
			return {
				active: false,
				elId: elId,
				width: 0,
				left: 0
			};
		},
		created () {
			this.tab.childrens.push(this)
			this.tab.childrens.map((vm, index) => { // 加index属性
				vm.index = index
			})
			if (this.tab.value == this.index) { // 当前子组件是否激活
				this.active = true
			}
		},
		mounted() {
			this.getSize()
		},
		onReady() {
			this.getSize()
		},
		methods: {
			getSize () {
				uni.createSelectorQuery()
					.in(this)
					.select(`#${this.elId}`)
					.boundingClientRect()
					.exec(rect => {
						this.width = rect[0].width
						this.left = rect[0].left
						if (this.tab.value == this.index) {
							this.tab.left = this.left + ( this.width -  this.tab.indicate.width)/2
						}
					})
			},
			handleChange () {
				this.tab.childrens.map((vm, index) => {
					vm.active = false
				})
				this.active = true
				this.tab.left = this.left + ( this.width -  this.tab.indicate.width)/2
				this.tab.scrollLeft = this.left - this.tab.parentWidth /2 + this.width/2
				this.tab.onChange && this.tab.onChange(this.index)
			}
		}
	}
</script>

<style lang="scss" scoped>
:host{
	flex-shrink: 0;
}
.hc-tab{
	&__item{
		display:flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size:$uni-tab-fontsize;
		color: $uni-tab-default-color;
		flex-shrink: 0;
		height:$uni-tab-height;
		white-space:nowrap;
		&.active{
			color: $uni-tab-active-color;
		}
	}
}
</style>
