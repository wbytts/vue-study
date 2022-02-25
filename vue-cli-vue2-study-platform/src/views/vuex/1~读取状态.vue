<template>
  <div>
    {{$store.state.a}}
    <br />
    <el-button type="primary" @click="testRead">读取测试</el-button>
  </div>
</template>

<script>
export const name = 'Vuex# 1~读取状态';

import { mapState } from 'vuex';

export default {
  data() {
    return {
      msg: 'hello',
    };
  },
  computed: {
    ...mapState({
      // 通过一个函数指定映射关系（箭头函数更简单）
      a1: state => state.a,
      // 传字符串参数 'count' 等同于 `state => state.count`
      a2: 'a',
      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      a3(state) {
        return this.msg + '#' + state.a;
      },
    }),

    // !当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组
    // 映射 this.count 为 store.state.count
    // ...mapState(['count'])
  },
  methods: {
    testRead() {
      let a = this.$store.state.a;
      console.log(`a=${a}`);
    },
  },
};
</script>

<style>
</style>
