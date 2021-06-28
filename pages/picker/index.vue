<template>
	<hc-page>
		<hc-panel>
			<hc-title>单列</hc-title>
			<hc-cell label="单列选择" arrow @click="show = true">
				<text v-if="arrIdx.length">{{arr[arrIdx[0]]}}</text>
				<text v-if="!arrIdx.length">请选择</text>
			</hc-cell>
			<hc-picker v-model="show" mode="selector" :range="arr" :selection.sync="arrIdx" @columnchange="handleChange"></hc-picker>
		</hc-panel>

		<hc-panel>
			<hc-title>多列</hc-title>
			<hc-cell label="多列选择" arrow @click="show1 = true">
				<text v-if="arr1Idx.length">{{arr1[0][arr1Idx[0]]}}/{{arr1[1][arr1Idx[1]]}}</text>
				<text v-if="!arr1Idx.length">请选择</text>
			</hc-cell>
			<hc-picker v-model="show1" mode="multiSelector" :range="arr1" :selection.sync="arr1Idx" @columnchange="handleChange"></hc-picker>
		</hc-panel>

		<hc-panel>
			<hc-title>区域联动</hc-title>
			<hc-cell label="省市区" arrow @click="show2 = true">
				<text v-if="region.length">{{region.join('/')}}</text>
				<text v-if="!region.length">请选择</text>
			</hc-cell>
			<hc-picker v-model="show2" mode="region" :region.sync="region" @columnchange="handleChange" @confirm="handleConfirm"></hc-picker>

			<hc-cell label="省市" arrow @click="show3 = true">
				<text v-if="region1.length">{{region1.join('/')}}</text>
				<text v-if="!region1.length">请选择</text>
			</hc-cell>
			<hc-picker v-model="show3" mode="region" :region.sync="region1" @columnchange="handleChange" @confirm="handleConfirm" :params="{province: true, city: true, area: false}"></hc-picker>

			<hc-cell label="省" arrow @click="show4 = true">
				<text v-if="region2.length">{{region2.join('/')}}</text>
				<text v-if="!region2.length">请选择</text>
			</hc-cell>
			<hc-picker v-model="show4" mode="region" :region.sync="region2" @columnchange="handleChange" @confirm="handleConfirm" :params="{province: true, city: false, area: false}"></hc-picker>
		</hc-panel>
	</hc-page>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				arr: ['热干面', '细粉', '宽粉'],
				arrIdx: [],
				show1: false,
				arr1: [['热干面', '细粉', '宽粉'], ['加辣', '不加辣']],
				arr1Idx: [0, 1],
				show2: false,
				show3: false,
				show4: false,
				region: [],
				region1: ['广东省', '韶关市'],
				region2: ['湖北省'],
				time: ''
			}
		},
		onLoad() {

		},
		methods: {
			handleChange (data) {
				console.log('监听列变化', data)
			},
			handleConfirm (data) {
				console.log('监听确定事件', data)
			}
		}
	}
</script>
