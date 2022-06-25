<template>
  <div>
    <el-input v-model="value" @input="byElInputNumberControl"></el-input>
  </div>
</template>

<script>
export const name = 'ElementUI# el-input# 限制整数小数位数';
import byMix from './by-mixin.js'

export default {
  mixins: [byMix],
  data() {
    return {
      value: '',
    };
  },
  methods: {

  }
};
</script>

<style>
</style>
