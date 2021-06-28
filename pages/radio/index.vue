<template>
	<hc-page>
		<hc-panel>
			<hc-title>普通用法</hc-title>
			<hc-radio-group v-model="sexCheck" @change="handleCheck">
				<hc-radio :name="item.name" style="margin-right:40upx;" v-for="(item, index) in sex" :key="index">{{item.label}}</hc-radio>
			</hc-radio-group>
			<view class="txt">{{String(sexCheck)}}</view>
		</hc-panel>

		<hc-panel>
			<hc-title>列展示</hc-title>
			<hc-radio-group v-model="arrCheck" @change="handleCheck" vertical>
				<hc-radio :name="item.name" v-for="(item, index) in arr" :key="index" align="top">{{item.label}}</hc-radio>
			</hc-radio-group>
			<view class="txt">{{String(arrCheck)}}</view>
		</hc-panel>

		<hc-panel>
			<hc-title>居右展示</hc-title>
			<hc-radio-group v-model="payCheck" @change="handleCheck" vertical>
				<hc-radio :name="item.name" v-for="(item, index) in pay" :key="index" reverse>{{item.label}}</hc-radio>
			</hc-radio-group>
			<view class="txt">{{String(payCheck)}}</view>
		</hc-panel>

		<hc-panel>
			<hc-title>自定义样式</hc-title>
			<hc-radio-group v-model="payCheck" @change="handleCheck" vertical>
				<hc-radio :name="item.name" v-for="(item, index) in pay" :key="index" reverse height="100rpx" padding="0" active-color="red" size="40" line>{{item.label}}</hc-radio>
			</hc-radio-group>
			<view class="txt">{{String(payCheck)}}</view>
		</hc-panel>

		<hc-panel>
			<hc-title>自定义内容</hc-title>
			<hc-radio-group v-model="payCheck1" @change="handleCheck" vertical>
				<hc-radio :name="item.name" v-for="(item, index) in pay" :key="index" reverse>
					<view class="pay">
						<image src="/static/logo.png" class="pay-icon"></image>
						<text class="pay-txt">{{item.label}}</text>
					</view>
				</hc-radio>
			</hc-radio-group>
			<view class="txt">{{String(payCheck1)}}</view>
		</hc-panel>

		<hc-panel>
			<hc-title>扩展</hc-title>
			<hc-radio-group v-model="chooseArr">
				<hc-radio :name="item.name" v-for="(item, index) in choose" :key="index" :show-icon="false">
					<view class="list" :class="[chooseArr == item.name ? 'active' : '']">{{item.label}}</view>
				</hc-radio>
			</hc-radio-group>
			<view class="txt">{{String(chooseArr)}}</view>
		</hc-panel>

	</hc-page>
</template>

<script>
	export default {
		data() {
			return {
				sexCheck: 'male',
				sex: [{
					name: 'male',
					label: '男'
				}, {
					name: 'female',
					label: '女'
				}],
				arrCheck: '01',
				arr: [{
					name: '01',
					label: '近代以来久经磨难的中华民族迎来了从站起来、富起来到强起来的伟大飞跃景'
				}, {
					name: '02',
					label: '科学社会主义在二十一世纪的中国焕发出强大生机活力'
				}, {
					name: '03',
					label: '实现贫困人口脱贫'
				}],
				payCheck: 'wx',
				payCheck1: 'wx',
				pay: [{
					name: 'wx',
					label: '微信支付'
				}, {
					name: 'alipay',
					label: '支付宝支付'
				}],
				choose: [{
					name: 'type1',
					label: '中国人保'
				}, {
					name: 'type2',
					label: '中华保险'
				}, {
					name: 'type3',
					label: '人寿保险'
				}],
				chooseArr: 'type1'
			}
		},
		onLoad() {
		},
		methods: {
			handleCheck (data) {
				console.log('选中', data)
			}
		}
	}
</script>

<style lang="scss" scoped>
.txt{
	display:inline-block;
	font-size:24upx;
	color:#333;
	background:#f5f5f5;
	padding:5px;
}
.pay{
	display:flex;
	align-items:center;
	&-icon{
		width:60upx;
		height:60upx;
		margin-right:30upx;
	}
	&-txt{
		font-size:28upx;
		color:#333;
	}
}
.list{
	font-size:28upx;
	color:#333;
	background:#f5f5f5;
	line-height:60upx;
	padding:0 30upx;
	margin-right:20upx;
	margin-bottom:20upx;
	&.active{
		background:$uni-color-primary;
		color:#fff;
	}
}
</style>

