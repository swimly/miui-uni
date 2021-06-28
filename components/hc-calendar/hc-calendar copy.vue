<template>
	<view class="hc-calendar" :style="{height: type == 'week' ? 'auto' : `${height}rpx`}"
		@touchstart="onTouchStart"
		@touchmove="onTouchMove"
		@touchend="onTouchEnd"
	>
		<text>{{current}}</text>
		<hc-calendar-head></hc-calendar-head>
		<hc-calendar-content v-if="type == 'week'" :width="rectwidth" :offset="offsetX">
			<hc-calendar-week v-for="(week, index) in data" :key="index" :width="rectwidth">
				<hc-calendar-day
					v-model="value"
					:month="day.month"
					:is-month="true"
					:is-current="isCurrent(day)"
					v-for="(day, i) in week.days"
					:key="i"
					:day="day.day"
				></hc-calendar-day>
			</hc-calendar-week>
		</hc-calendar-content>
		<hc-calendar-content v-else :scrollable="type == 'range'" :width="rectwidth" :offset="offsetX">
			<hc-calendar-month v-for="(month, index) in data" :key="index" :month="month.month">
				<hc-calendar-week v-for="(week, i) in month.days" :key="i" :width="rectwidth">
					<hc-calendar-day
						v-model="value"
						:is-month="month.month == day.month"
						:is-current="isCurrent(day)"
						:month="day.month"
						v-for="(day, idx) in week"
						:key="idx"
						:day="day.day"
					></hc-calendar-day>
				</hc-calendar-week>
			</hc-calendar-month>
		</hc-calendar-content>
	</view>
</template>

<script>
	import {get3MonthDays, get3WeekDays, dateFormat, getRangeMonthDays, DisDate, getDiffDates} from '../../utils/calendar'
	export default {
		name: 'hc-calendar',
		provide() {
			return {
				calendar: this
			}
		},
		computed: {
			isCurrent () {
				const date = (new Date()).getDate()
				return (item) => {
					return item.day == date
				}
			}
		},
		props: {
			type: {
				type: String
			},
			value: {
				type: String,
				default: () => {
					return dateFormat('YYYY/MM/DD', new Date())
				}
			},
			range: {
				type: Number,
				default: 12
			},
			height: {
				type: [Number, String],
				default: 600
			},
			width: {
				type: [Number, String]
			}
		},
		data() {
			return {
				data: [],
				rectwidth: this.width,
				current: this.value,
				currentIndex: 1,
				offsetX: 0
			};
		},
		beforeMount () {
			this.data = this.computedData()
		},
		mounted () {
			this.$utils.getFields('.hc-calendar', this).then(res => {
				this.rectwidth = res.width
			})
		},
		methods: {
			onTouchStart (e) {},
			onTouchMove (e) {},
			onTouchEnd (e) {},
			onMovePrev () {
				this.current = this.onChange('prev')
				return this.computedData()
			},
			onMoveNext () {
				this.current = this.onChange('next')
				return this.computedData()
			},
			computedData () {
				const {type, current, range} = this
				let data = null
				switch (type) {
					case 'week':
						data = get3WeekDays(current)
						break
					case 'month':
						data = get3MonthDays(current)
						break
					case 'range':
						data = getRangeMonthDays(current, range)
						break
				}
				return data
			},
			onChange (type) {
				const current = new Date(this.current)
				let year = current.getFullYear()
				let month = current.getMonth() + 1
				const day = current.getDate()
				let date = ''
				if (type == 'next') {
					if (this.type !== 'week') {
						year = month < 12 ? year : year + 1
						month = month < 12 ? month + 1 : 1
					} else {
						date = DisDate(this.current, 7)
					}
				} else {
					if (this.type !== 'week') {
						year = month > 1 ? year : year - 1
						month = month > 1 ? month - 1 : 12
					} else {
						date = DisDate(this.current, -7)
					}
				}
				const result = this.type == 'week' ? date : `${year}/${this.formatNumber(month)}/${this.formatNumber(day)}`
				this.$emit('input', result)
				return result
			},
			onDateChange (v) {
				this.$emit('input', v)
			},
			formatNumber (val) {
				return val >= 10 ? val : `0${val}`
			},
			onDataChange (v) {
				// console.log(v)
			}
		},
		watch: {
			'current': 'onDateChange',
			'data': 'onDataChange'
		}
	}
</script>

<style lang="scss">
.hc-calendar{
	display:flex;
	flex-direction: column;
	overflow:hidden;
	&__swiper{
		width:100%;
	}
}
</style>
