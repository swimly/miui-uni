<template>
	<view :class="['hc-cell']">
		<view class="hc-cell__label">
			<slot name="label">
				{{label}}
			</slot>
		</view>
		<view class="hc-cell__value" @click="handleValueClick">
			<slot>
				{{value}}
			</slot>
			<hc-icon :name="arrowDirection == 'right' ? 'arrow-right' : (arrowDirection == 'down' ? 'arrow-down' : 'arrow-up')" size="36" v-if="arrow" class="hc-cell__value_right"></hc-icon>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'hc-cell',
		props: {
			label: {
				type: String
			},
			value: {
				type: String
			},
			arrow: {
				type: Boolean,
				default: false
			},
			arrowDirection: { // right up down
				type: String,
				default: 'right'
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			handleValueClick () {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss">
.hc-cell{
	display:flex;
	flex-direction: row;
	align-items:flex-start;
	font-size:$uni-font-size-base;
	padding: $uni-font-size-base 0;
	position:relative;
	line-height: $uni-font-size-base * 1.6;
	&:after{
		content:"";
		display:block;
		width:100%;
		height:1upx;
		position:absolute;
		left:0;
		bottom:0;
		background-color: $uni-border-color;
		transform: scaleY(0.4);
	}
	&__label{
		color: $uni-text-color;
		margin-right: $uni-font-size-base * 2;
	}
	&__value{
		flex:1;
		color:$uni-text-color;
		text-align:right;
		display:flex;
		align-items:center;
		justify-content:flex-end;
		&_right{
			color: $uni-border-color;
		}
	}
}
</style>
