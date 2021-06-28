<template>
  <hc-popup v-model="show">
    <view class="hc-picker">
      <view class="hc-picker__header">
        <view class="hc-picker__header_txt" @click="cancel">取消</view>
        <view class="hc-picker__header_txt" @click="confirm">确定</view>
      </view>
      <view class="hc-picker__body">
        <picker-view v-if="mode == 'selector'" :indicator-style="indicatorStyle" :value="valueArr" @change="bindChange" class="hc-picker__view">
          <picker-view-column class="hc-picker__view_column">
            <view v-for="(item, idx) in range" :key="idx" class="hc-picker__txt"><view class="hc-picker__txt_inner">{{item}}</view></view>
          </picker-view-column>
        </picker-view>

        <picker-view v-if="mode == 'multiSelector'" :indicator-style="indicatorStyle" :value="valueArr" @change="bindChange" class="hc-picker__view">
          <picker-view-column class="hc-picker__view_column" v-for="(item, index) in range" :key="index">
            <view v-for="(row, idx) in item" :key="idx" class="hc-picker__txt"><view class="hc-picker__txt_inner">{{row}}</view></view>
          </picker-view-column>
        </picker-view>

        <picker-view v-if="valueArr.length && mode == 'region'" :indicator-style="indicatorStyle" :value="valueArr" class="hc-picker__view" @change="bindChange">
          <picker-view-column class="hc-picker__view_column" v-if="params.province">
            <view v-for="(item, idx) in province" :key="idx" class="hc-picker__txt"><view class="hc-picker__txt_inner"><view class="hc-picker__txt_inner">{{item.label}}</view></view></view>
          </picker-view-column>
          <picker-view-column class="hc-picker__view_column" v-if="params.city">
            <view v-for="(item, idx) in city[valueArr[0]]" :key="idx" class="hc-picker__txt"><view class="hc-picker__txt_inner">{{item.label}}</view></view>
          </picker-view-column>
          <picker-view-column class="hc-picker__view_column" v-if="params.area">
            <view v-for="(item, idx) in area[valueArr[0]][valueArr[1]]" :key="idx" class="hc-picker__txt"><view class="hc-picker__txt_inner">{{item.label}}</view></view>
          </picker-view-column>
        </picker-view>
      </view>
    </view>
  </hc-popup>
</template>

<script>
import area from './area.js'
import city from './city.js'
import province from './province.js'

export default {
  name: 'hc-picker',
  props: {
    value: { // 显示与隐藏
      type: Boolean,
      default: false
    },
    mode: { // selector  multiSelector region
      type: String,
      default: 'selector'
    },
    range: { // selector multiSelector 下拉数据
      type: Array
    },
    selection: { // selector multiSelector 各列索引数组（双向绑定）
      type: Array,
      default () {
        return [0]
      }
    },
    region: { // region 各列label数组（双向绑定）
      type: Array,
      default () {
        return []
      }
    },
    params: {
      type: Object,
      default () {
        return {
          province: true,
          city: true,
          area: true
        }
      }
    }
  },
  data () {
    return {
      show: this.value,
      valueArr: [], //  各列索引数组
      visible: true,
      indicatorStyle: `height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/100))}px;`,
      province,
      city,
      area
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init () {
      switch (this.mode) {
        case 'region': // 省  省-市  省-市-区
          this.setRegion()
          break;
        case 'selector':
          this.valueArr = this.selection
          break;
        case 'multiSelector':
          this.valueArr = this.selection
          break;
      }
    },
    // 初始化区域值--索引
    setRegion () {
      this.valueArr = []
      let provinceIdx = typeof this.region[0] == 'undefined' ? 0 : this.province.findIndex(x => x.label == this.region[0])
      let provinceTxt = this.province[provinceIdx].label

      let cityIdx = typeof this.region[1] == 'undefined' ? 0 : this.city[provinceIdx].findIndex(x => x.label == this.region[1])
      let cityTxt = this.city[provinceIdx][cityIdx].label

      let areaIdx = typeof this.region[2] == 'undefined' ? 0 : this.area[provinceIdx][cityIdx].findIndex(x => x.label == this.region[2])
      let areaTxt = this.area[provinceIdx][cityIdx][areaIdx].label

      if (this.params.province) {
        this.valueArr[0] = provinceIdx
        this.region[0] = provinceTxt
      }
      if (this.params.city) {
        this.valueArr[1] = cityIdx
        this.region[1] = cityTxt
      }
      if (this.params.area) {
        this.valueArr[2] = areaIdx
        this.region[2] = areaTxt
      }
      this.$forceUpdate()
      
      console.log('init', this.valueArr, this.region);
    },
    // 监听列变化，回调参数
    bindChange (e) {
      let column = this.valueArr.findIndex((val, idx) => val !== e.detail.value[idx])
      this.$emit('columnchange', {
        column: column,
        index: e.detail.value[column]
      })
      this.valueArr = e.detail.value
      
      // 区域第二三列置顶
      if (this.mode == 'region') {
        if (this.params.province) {
          if (column == 0) {
            if (this.params.city) this.valueArr[1] = 0
            if (this.params.area) this.valueArr[2] = 0
          }
        }
        if (this.params.city) {
          if (column == 1) {
            if (this.params.area) this.valueArr[2] = 0
          }
        }
      }
    },
    // 关闭弹窗
    closePopup () {
      this.show = false
      this.$emit('input', this.show)
    },
    // 取消
    cancel () {
      this.closePopup()
      this.$emit('cancel')
    },
    // 确定
    confirm () {
      this.closePopup()

      if (this.mode == 'selector' || this.mode == 'multiSelector') {
        this.$emit('update:selection', this.valueArr)
      }
      
      if (this.mode == 'region') {
        let result = {}
        let arr = []
        if (this.params.province) {
          result.province = province[this.valueArr[0]]; arr[0] = result.province.label
        }
        if (this.params.city) {
          result.city = city[this.valueArr[0]][this.valueArr[1]]; arr[1] = result.city.label;
        }
        if (this.params.area) {
          result.area = area[this.valueArr[0]][this.valueArr[1]][this.valueArr[2]]; arr[2] = result.area.label
        }
        this.$emit('confirm', result)
        this.$emit('update:region', arr)
      }
    }
  },
  watch: {
    value (val) {
      this.show = val
      this.init()
    }
  }
}
</script>

<style lang="scss" scoped>
.hc-picker{
  &__header{
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:$uni-picker-header-height;
    &_txt{
      padding:0 $uni-picker-header-padding;
      font-size:$uni-picker-fontsize;
      color:$uni-picker-active-color;
      line-height:$uni-picker-header-height;
    }
  }
  &__body{
    height:$uni-picker-body-height;
  }
  &__view{
    height:100%;
    &_column{
      display:flex;
      align-items:center;
      justify-content:center;
    }
  }
  &__txt{  
    display:flex;
    align-items:center;
    justify-content:center;
    &_inner{
      padding:0 $uni-picker-body-text-padding;
      font-size:$uni-picker-fontsize;;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    }
  }
}
</style>





