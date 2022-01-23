<template>
  <div>
    <!--
      el-input 默认占据一行
      placeholder 输入框占位文本
      v-bind:value 数据单向绑定
      v-model 数据双向绑定
     -->
    <el-input v-model="input" placeholder="请输入内容" ></el-input>
    <div>{{input}}</div>

    <!--
      clearable 可清空的输入框
      disabled 禁用的输入框
      show-password 可切换显示隐藏的密码框
    -->
    <el-input v-model="input" clearable></el-input>

    <!--
      size 输入框的预设尺寸
        默认、large、small、mini
     -->
  </div>
</template>

<script>
export const name = 'ElementUI# Input# 基础用法';

export default {
  data() {
    return {
      input: '',
    };
  },
};
</script>

<style>
</style>
