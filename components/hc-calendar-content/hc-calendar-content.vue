<template>
	<view
		:class="['hc-calendar__content', {scrollable}]" 
		:style="{
			transform: scrollable ? 'translate3d(0, 0, 0)' : `translate3d(${offset}px, 0, 0)`,
			transition: `${duration}ms`
		}"
	>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'hc-calendar-content',
		inject: ['calendar'],
		props: {
			scrollable: {
				type: Boolean,
				default: false
			},
			width: {
				type: [Number, String]
			},
			offset: {
				type: [Number, String],
				default: 0
			},
			duration: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
			};
		},
		created () {

		},
		methods: {
		}
	}
</script>

<style lang="scss">
:host{
	flex:1;
	display:flex;
	flex-direction: row;
	padding: $uni-calendar-fontsize 0;
}
.hc-calendar__content{
	flex:1;
	display:flex;
	flex-direction: row;
	padding: $uni-calendar-fontsize 0;
	&.scrollable{
		flex:1;
		display:block;
		overflow: auto;
	}
}
</style>
