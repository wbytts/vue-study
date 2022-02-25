<template>
  <div>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-slider v-model="value1"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">自定义初始值</span>
      <el-slider v-model="value2"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">隐藏 Tooltip</span>
      <el-slider v-model="value3" :show-tooltip="false"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">格式化 Tooltip</span>
      <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">禁用</span>
      <el-slider v-model="value5" disabled></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">离散值~不显示间断点</span>
      <el-slider v-model="value6" :step="10"> </el-slider>
    </div>
    <div class="block">
      <span class="demonstration">离散值~显示间断点</span>
      <el-slider v-model="value7" :step="10" show-stops> </el-slider>
    </div>
    <div class="block">
      <span class="demonstration">带有一个输入框</span>
      <el-slider v-model="value8" show-input> </el-slider>
    </div>
    <div class="block">
      <span class="demonstration">范围选择</span>
      <el-slider v-model="value9" range show-stops :max="100"> </el-slider>
    </div>
    <div class="block">
      <span class="demonstration">展示标记</span>
      <el-slider v-model="value10" range :marks="marks10"> </el-slider>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementSliderPage',
  data() {
    return {
      value1: 0,
      value2: 10,
      value3: 20,
      value4: 30,
      value5: 40,
      value6: 50,
      value7: 60,
      value8: 70,
      value9: [30, 90],
      value10: [30, 60],
      marks10: {
        0: '0°C',
        8: '8°C',
        37: '37°C',
        40: '40°C',
        50: {
          style: {
            color: '#1989FA',
          },
          label: this.$createElement('strong', '50%'),
        },
      },
    }
  },
  methods: {
    formatTooltip(val) {
      return '百分之' + val
    },
  },
}
</script>

<style></style>
