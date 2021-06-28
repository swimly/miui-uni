<template>
	<hc-page>
		<hc-panel>
			<hc-title>普通用法</hc-title>
			<hc-checkbox-group>
			  <hc-checkbox v-model="read" @change="handleChange">阅读并同意协议</hc-checkbox>
			</hc-checkbox-group>
			<view class="txt">{{String(read)}}</view>
		</hc-panel>

		<hc-panel>
			<hc-title>多选</hc-title>
			<hc-checkbox-group v-model="check" @change="handleCheck">
				<hc-checkbox :name="item.name" style="flex:1;" v-for="(item, index) in list" :key="index">{{item.label}}</hc-checkbox>
			</hc-checkbox-group>
			<view class="txt">{{String(check)}}</view>
		</hc-panel>
		

		<hc-panel>
			<hc-title>多选-列展示</hc-title>
			<hc-checkbox-group v-model="check1" vertical @change="handleCheck">
				<hc-checkbox :name="item.name" v-for="(item, index) in list1" :key="index" align="top">{{item.label}}</hc-checkbox>
			</hc-checkbox-group>
			<view class="txt">{{String(check1)}}</view>
		</hc-panel>
		

		<hc-panel>
			<hc-title>居右展示</hc-title>
			<hc-checkbox-group v-model="payCheck" vertical @change="handleCheck">
				<hc-checkbox :name="item.name" v-for="(item, index) in pay" :key="index" reverse>{{item.label}}</hc-checkbox>
			</hc-checkbox-group>
			<view class="txt">{{String(payCheck)}}</view>
		</hc-panel>

		<hc-panel>
			<hc-title>自定义样式</hc-title>
			<hc-checkbox-group v-model="payCheck" vertical @change="handleCheck">
				<hc-checkbox :name="item.name" v-for="(item, index) in pay" :key="index" reverse height="100rpx" padding="20rpx 0" active-color="red" size="40" line>{{item.label}}</hc-checkbox>
			</hc-checkbox-group>
			<view class="txt">{{String(payCheck)}}</view>
		</hc-panel>

		<hc-panel>
			<hc-title>自定义内容</hc-title>
			<hc-checkbox-group v-model="payCheck1" vertical>
				<hc-checkbox :name="item.name" v-for="(item, index) in pay" :key="index" reverse>
					<view class="pay">
						<image src="/static/logo.png" class="pay-icon"></image>
						<text class="pay-txt">{{item.label}}</text>
					</view>
				</hc-checkbox>
			</hc-checkbox-group>
			<view class="txt">{{String(payCheck1)}}</view>
		</hc-panel>

		<hc-panel>
			<hc-title>扩展</hc-title>
			<hc-checkbox-group v-model="chooseArr">
				<hc-checkbox :name="item.name" v-for="(item, index) in choose" :key="index" :show-icon="false">
					<view class="list" :class="[chooseArr.indexOf(item.name) !== -1 ? 'active' : '']">{{item.label}}</view>
				</hc-checkbox>
			</hc-checkbox-group>
			<view class="txt">{{String(chooseArr)}}</view>
		</hc-panel>
	</hc-page>
</template>

<script>
	export default {
		data() {
			return {
				read: false,
				check: ['beijing', 'shanghai'],
				list: [{
					name: 'beijing',
					label: '北京'
				}, {
					name: 'shanghai',
					label: '上海'
				}, {
					name: 'guangzhou',
					label: '广州'
				}],
				check1: ['01', '03'],
				list1: [{
					name: '01',
					label: '近代以来久经磨难的中华民族迎来了从站起来、富起来到强起来的伟大飞跃景'
				}, {
					name: '02',
					label: '科学社会主义在二十一世纪的中国焕发出强大生机活力'
				}, {
					name: '03',
					label: '实现贫困人口脱贫'
				}],
				payCheck: ['wx'],
				pay: [{
					name: 'wx',
					label: '微信'
				}, {
					name: 'alipay',
					label: '支付宝'
				}],
				payCheck1: ['wx'],
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
				chooseArr: ['type1']
			}
		},
		onLoad() {
		},
		methods: {
			handleCheck (data) {
				console.log('选中', data)
			},
			handleChange (data) {
				console.log('是否同意', data)
			}
		}
	}
</script>

<style lang="scss" scoped>
.sep{
	padding:0 30upx;
	margin-bottom:20upx;
}
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

