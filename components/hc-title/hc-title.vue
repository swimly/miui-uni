<template>
	<view :class="['hc-title', {subline}]">
		<view class="hc-title__icon" v-if="icon">
			<slot name="icon">
				<hc-icon :name="icon"></hc-icon>
			</slot>
		</view>
		<text class="hc-title__label"
			:style="{color: color, fontSize: fontSize}"
		>
			<slot>{{title}}</slot>
		</text>
		<view class="hc-title__more"
			:style="{color: moreColor}"
		>
			<slot name="more">
				<text>{{more}}</text>
			</slot>
		</view>
	</view>
</template>

<script>
	import HCIcon from '../hc-icon/hc-icon.vue'
	export default {
		name: 'hc-title',
		components: {
			HCIcon
		},
		props: {
			title: {
				type: String
			},
			more: {
				type: String
			},
			moreColor: {
				type: String
			},
			color: {
				type: String
			},
			icon: {
				type: String
			},
			subline: {
				type: Boolean
			},
			fontSize: {
				type: String
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.hc-title{
	display:flex;
	flex-direction: row;
	align-items:center;
	position:relative;
	margin-bottom: $uni-title-padding;
	&.subline{
		padding-bottom:$uni-title-padding;
		&:after{
			content:"";
			display:block;
			width:100%;
			height:1rpx;
			background-color: $uni-title-subline;
			position:absolute;
			left:0;
			bottom:0;
			transform: scaleY(0.4);
		}
	}
	&__icon{
		margin-right: $uni-title-fontsize * 0.5;
	}
	&__label{
		font-size: $uni-title-fontsize;
		color: $uni-title-color;
		font-weight: bold;
		flex:1;
	}
	&__more{
		font-size: $uni-title-fontsize * 0.9;
		font-weight: normal;
		color: $uni-title-more-color;
	}
}
</style>
