<template>
	<view class="hc-form__item">
		<view class="hc-form__item_label">
			<slot name="label">
				<text>{{label}}</text>
			</slot>
		</view>
		<view class="hc-form__item_value" :style="{alignItems: alignStyle}">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'hc-form-item',
		props: {
			label: {
				type: String
			},
			align: {
				type: String
			}
		},
		computed: {
			alignStyle () {
				return this.align == 'left' ? 'flex-start' : this.align == 'center' ? 'center' : 'flex-end'
			}
		},
		data() {
			return {
			};
		}
	}
</script>

<style lang="scss">
.hc-form__item{
	font-size: $uni-form-fontsize;
	min-height: $uni-input-height;
	display:flex;
	flex-direction: row;
	align-items: flex-start;
	position:relative;
	padding: $uni-input-height * 0.1 0;
	&:after{
		content:"";
		position:absolute;
		display:block;
		width:100%;
		height:1rpx;
		background:$uni-border-color;
		left:0;
		bottom:0;
		transform: scaleY(0.5);
	}
	&_label,
	&_value{
		color: $uni-form-label-color;
		min-height: $uni-input-height;
		display:flex;
		flex-direction: column;
		justify-content: center;
	}
	&_value{
		color: $uni-form-value-color;
		flex:1;
	}
}
</style>
