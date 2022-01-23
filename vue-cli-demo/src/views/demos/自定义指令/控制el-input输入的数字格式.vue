<template>
  <div>
    <el-input v-model="num" v-number="{length: 20, precision: 2}"></el-input>
  </div>
</template>

<script>
export const name = 'demo# 自定义指令# 控制';

import './number.js'

export default {
  data() {
    return {
      num: 123,
    };
  },
};
</script>

<style>
</style>

