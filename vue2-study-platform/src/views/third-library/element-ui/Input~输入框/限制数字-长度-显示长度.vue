<template>
  <div>
    <el-input v-model="val" maxlength="30" show-word-limit style="width: 600px;" v-number="{length: 30}"></el-input>
  </div>
</template>

<script>
export const name = 'ElementUI# input# 限制数字,长度,显示输入长度';
import './number.js';

export default {
  data() {
    return {
      val: '',
    };
  },
  methods: {},
};
</script>

<style>
</style>
