<template>
  <div>
    <!--
      el-select绑定的变量，在选项被选中的时候，会将变量修改为选项的value
      如果没有设置value属性，则赋值为 undefined
    -->
    <el-select v-model="val">
      <el-option label="aaa" value="0"></el-option>
      <el-option label="bbb" value="1"></el-option>
      <el-option label="ccc" value="2"></el-option>
      <el-option label="ddd" value="3"></el-option>
      <el-option label="eee"></el-option>
    </el-select>
    <hr>
    <div>{{val}}</div>
  </div>
</template>

<script>
export const name = 'ElementUI# select# 基本下拉选择';

export default {
  data() {
    return {
      val: '',
    };
  },
};
</script>

<style>
</style>
