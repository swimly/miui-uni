<template>
	<view :class="['hc-input', type, size, {conner, rounder, subline, light}]" :style="{margin: margin}">
		<slot name="prefix">
			<view class="hc-input__prefix" v-if="prefixIcon || prefixLabel">
				<text class="hc-input__label" v-if="prefixLabel">{{prefixLabel}}</text>
				<hc-icon v-if="prefixIcon" :color="iconColor" :name="prefixIcon" :size="iconSize"></hc-icon>
			</view>
		</slot>
		<input type="text" class="hc-input__core" :style="{textAlign: align}" :value="valueString" :placeholder="placeholder" :maxlength="maxLength" @input="onValueChange">
		<view class="hc-input__append" v-if="clearable || maxLength">
			<hc-icon :name="clearIcon" v-if="clearable && valueString" :size="iconSize" @click="onClearClick"></hc-icon>
			<text class="hc-input__count" v-if="maxLength">{{valueString ? valueString.length : 0}}/{{maxLength}}</text>
		</view>
		<slot name="suffix">
			<view class="hc-input__suffix" v-if="suffixIcon || suffixLabel">
				<text class="hc-input__label" v-if="suffixLabel">{{suffixLabel}}</text>
				<hc-icon v-if="suffixIcon" :color="iconColor" :name="suffixIcon" :size="iconSize"></hc-icon>
			</view>
		</slot>
	</view>
</template>

<script>
	import HCIcon from '../hc-icon/hc-icon.vue'
	export default {
		name: 'hc-input',
		components: {
			HCIcon
		},
		props: {
			type: {
				type: String
			},
			value: {
				type: [String, Number]
			},
			placeholder: {
				type: String
			},
			conner: {
				type: Boolean
			},
			rounder: {
				type: Boolean
			},
			subline: {
				type: Boolean
			},
			light: {
				type: Boolean
			},
			prefixIcon: {
				type: String
			},
			suffixIcon: {
				type: String
			},
			prefixLabel: {
				type: String
			},
			suffixLabel: {
				type: String
			},
			iconColor: {
				type: String
			},
			iconSize: {
				type: Number,
				default: 38
			},
			maxLength: {
				type: Number
			},
			clearable: {
				type: Boolean
			},
			clearIcon: {
				type: String,
				default: 'guanbi2'
			},
			align: {
				type: String
			},
			margin: {
				type: String
			},
			size: {
				type: String
			}
		},
		data() {
			return {
				valueString: this.value
			};
		},
		methods: {
			onValueChange (event) {
				this.valueString = event.detail.value
				this.$emit('input', this.valueString)
			},
			onChange (v) {
				this.valueString = v
			},
			onClearClick () {
				this.valueString = ''
				this.$emit('input', this.valueString)
			}
		},
		watch: {
			'value': 'onChange'
		}
	}
</script>

<style lang="scss">
.hc-input{
	display:flex;
	flex-direction: row;
	align-items:center;
	position:relative;
	font-size:$uni-input-fontsize;
	height: $uni-input-height;
	padding: 0 $uni-input-fontsize * 0.7;
	width:100%;
	&:after{
		content:"";
		display:block;
		left:0;
		top:0;
		position:absolute;
		width:200%;
		height:200%;
		border:1rpx solid $uni-input-border;
		transform-origin: left top;
		transform: scale(0.5);
		z-index:1;
	}
	&__core{
		flex:1;
		position: relative;
		z-index:10;
		font-size: inherit;
		color:inherit;
		caret-color: $uni-color-primary;
		.input-placeholder{
			color:$uni-input-placeholder;
		}
	}
	&__append{
		color: rgba($uni-input-color, 0.6);
		position:relative;
		z-index:10;
		margin:0 $uni-input-fontsize * 0.7;
		display:flex;
		flex-direction: row;
		align-items: center;
	}
	&__count{
		margin-left: $uni-input-fontsize * 0.5;
	}
	&__prefix{
		margin:0 $uni-input-fontsize * 0.7 0 0;
		position:relative;
		z-index:10;
	}
	&__suffix{
		margin:0 0 0 $uni-input-fontsize * 0.7;
		color: $uni-input-icon-color;
		position:relative;
		z-index:10;
	}
	&.conner{
		&:after{
			border-radius: $uni-input-radius * 2;
		}
	}
	&.rounder{
		&:after{
			border-radius: $uni-input-height;
		}
	}
	&.subline{
		padding:0;
		&:after{
			border-top:none;
			border-left:none;
			border-right:none;
		}
	}
	&.light{
		padding:0;
		&:after{
			display:none;
		}
	}
	&.primary{
		&:after{
			border-color: rgba($uni-color-primary, 0.3);
			background: rgba($uni-color-primary, 0.1);
			color: rgba($uni-color-primary, 0.3)
		}
		.input-placeholder{
			color: rgba($uni-color-primary, 0.6)
		}
	}
	&.warning{
		&:after{
			border-color: rgba($uni-color-warning, 0.3);
			background: rgba($uni-color-warning, 0.1);
			color: rgba($uni-color-warning, 0.3)
		}
		.hc-input__core{
			caret-color: $uni-color-warning;
		}
		.input-placeholder{
			color: rgba($uni-color-warning, 0.6)
		}
	}
	&.success{
		&:after{
			border-color: rgba($uni-color-success, 0.3);
			background: rgba($uni-color-success, 0.1);
			color: rgba($uni-color-success, 0.3)
		}
		.hc-input__core{
			caret-color: $uni-color-success;
		}
		.input-placeholder{
			color: rgba($uni-color-success, 0.6)
		}
	}
	&.danger{
		&:after{
			border-color: rgba($uni-color-danger, 0.3);
			background: rgba($uni-color-danger, 0.1);
			color: rgba($uni-color-danger, 0.3)
		}
		.hc-input__core{
			caret-color: $uni-color-danger;
		}
		.input-placeholder{
			color: rgba($uni-color-danger, 0.6)
		}
	}
}
</style>
