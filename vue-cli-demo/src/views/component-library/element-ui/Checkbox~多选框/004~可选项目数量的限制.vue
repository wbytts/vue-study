<template>
  <div>
    <!--
      min：最少选择数量，如果只选择了这些，则这些不能取消
      max：最大选择数量，如果选择数量到了max，则其他未选择的会被禁用
     -->
    <el-checkbox-group v-model="checkedCities" :min="1" :max="2">
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
export const name = 'ElementUI# Checkbox# 004~可选项目数量的限制';

const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
  data() {
    return {
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
    };
  },
};
</script>

<style>
</style>
