<template>
  <div>
    <el-input type="text" v-model="a" />
    <el-input type="text" v-model="b" />
    <br />
    <el-button @click="calc">计算</el-button>
    <div>{{result}}</div>
  </div>
</template>

<script>
export const name = 'demo# 数字精度问题# bignumber.js# 001';
import BigNumber from 'bignumber.js';
// or maybe
// import { BigNumber } from "bignumber.js";

export default {
  data() {
    return {
      a: '',
      b: '',
      result: '',
    };
  },
  methods: {
    calc() {
      let a = new BigNumber(this.a);
      let b = new BigNumber(this.b);
      console.log(a);
      console.log(b);
      let result = a.plus(b);
      this.result = result.toFixed();
      console.log('result', result);
      console.log(a);
      console.log(b);
    },
  },
};
</script>

<style scoped>
</style>

