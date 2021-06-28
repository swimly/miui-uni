<template>
	<view class="hc-tab" id="tab">
		<scroll-view class="hc-tab__scroller"
			scroll-x 
			scroll-with-animation
			:scroll-left="scrollLeft - parentLeft">
			<view
				class="hc-tab__content"
				:style="{justifyContent: align}">
				<slot></slot>
			  <view
					class="hc-tab__indicate"
					:style="{width: `${indicate.width}px`, height: `${indicate.height}px`, borderRadius: `${indicate.borderRadius}px`, left: `${left - parentLeft}px`}">
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: 'hc-tab',
		props: {
			value: { // 当前激活索引
				type: Number
			},
			height: { // tab高度
				type: [Number, String]
			},
			align: { // center  space-around  space-between
				type: String
			},
			gutter: { // 每个tab左右边距
				type: [Number, String],
				default: ''
			},
			indicate: { // 指示线
				type: Object,
				default: () => {
					return {
						width: 40,
						height: 3,
						borderRadius: 3
					}
				}
			}
		},
		data() {
			return {
				left: 0,
				parentLeft: 0,
				parentWidth: 0,
				scrollLeft: 0
			}
		},
		provide() {
			return {
				tab: this
			}
		},
		created () {
			this.childrens = []
		},
		mounted() {
			uni.createSelectorQuery()
				.in(this)
				.select(`#tab`)
				.boundingClientRect()
				.exec(rect => {
					console.log('tab', rect)
					this.parentLeft = rect[0].left
					this.parentWidth = rect[0].width
				})
		},
		methods: {
			onChange (idx) {
				this.$emit('input', idx)
				this.$emit('change', idx)
			}
		},
	}
</script>

<style lang="scss" scoped>
::-webkit-scrollbar{
	display: none;
	width: 0 !important;
	height: 0 !important;
	-webkit-appearance: none;
	background: transparent;
}

.hc-tab{
	display:flex;
	flex-direction: row;
	align-items:center;
	&__scroller{
		width:100%;
	}
	&__content{
		display:flex;
		flex-direction: row;
		flex-wrap: nowrap;
		position:relative;
	}
	&__indicate{
		width:100upx;
		height:6upx;
		position:absolute;
		left:0;
		bottom:0;
		background-color: $uni-tab-active-color;
		transition: 0.3s;
	}
}
</style>
