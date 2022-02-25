<template>
  <div>
    <div>调用方法：{{calc()}}</div>
    <div>计算属性：{{result}}</div>
    <input type="text" v-model.number="a" />
    <input type="text" v-model.number="b" />
  </div>
</template>

<script>
export const name = '计算属性基本使用';
export default {
  data() {
    return {
      a: 0,
      b: 0,
      updateCount: 0,
    };
  },
  beforeUpdate() {
    console.log('-'.repeat(100));
  },
  updated() {
    this.updateCount++;
  },
  methods: {
    // 通过方法计算，每次使用的时候都要调用一次方法
    calc() {
      console.log('调用方法');
      return this.a + this.b;
    },
  },
  computed: {
    // 计算属性有缓存，当依赖的值不变的时候，不会重新计算
    // 计算属性可以当做普通属性一样使用，不需要加括号用作函数调用
    // 计算属性可以返回一个函数，这样可以做到接收参数
    result() {
      console.log('调用计算属性方法');
      return this.a + this.b;
    },
  },
};
</script>

<style></style>
