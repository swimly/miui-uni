<template>
	<hc-page>
		<hc-panel v-for="(group, i) in list" :key="i">
			<hc-title>{{group.title}}</hc-title>
			<navigator animation-type="pop-in" animation-duration="300" :url="`../${item.url}/index`" v-for="(item, index) in group.children" :key="index">
				<hc-cell :label="item.label"></hc-cell>
			</navigator>
		</hc-panel>
	</hc-page>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					title: '常用',
					children: [{
						label: 'Icon 图标',
						url: 'icon'
					}, {
						label: 'Image 图片',
						url: 'img'
					}, {
						label: 'Button 按钮',
						url: 'button'
					}]
				}, {
					title: '表单',
					children: [{
						label: 'Checkbox 复选框',
						url: 'checkbox'
					}, {
						label: 'Radio 单选框',
						url: 'radio'
					}, {
						label: 'Switch 开关',
						url: 'switch'
					}, {
						label: 'Input 输入框',
						url: 'input'
					}, {
						label: 'Form 表单',
						url: 'form'
					}]
				}, {
					title: '布局',
					children: [{
						label: 'Title 标题',
						url: 'title'
					}, {
						label: 'Grid 栅栏布局',
						url: 'grid'
					}, {
						label: 'Badge 徽标',
						url: 'badge'
					}, {
						label: 'Cell 单元格',
						url: 'cell'
					}, {
						label: 'List 列表',
						url: 'list'
					}, {
						label: 'Tab 切换',
						url: 'tab'
					}, {
						label: 'Number 数字',
						url: 'number'
					}]
				}, {
					title: '反馈',
					children: [{
						label: 'Mask 遮罩',
						url: 'mask'
					}, {
						label: 'Popup 弹出层',
						url: 'popup'
					}, {
						label: 'Noticebar 滚动通知',
						url: 'noticebar'
					}, {
						label: 'Actionsheet 操作菜单',
						url: 'actionsheet'
					}, {
						label: 'Notify 提示通知',
						url: 'notify'
					}, {
						label: 'Alert 模态框',
						url: 'alert'
					}, {
						label: 'Toast 吐司',
						url: 'toast'
					}]
				}, {
					title: '高级',
					children: [{
						label: 'Calendar 日历',
						url: 'calendar'
					}, {
						label: 'Picker 选择',
						url: 'picker'
					}]
				}]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>
