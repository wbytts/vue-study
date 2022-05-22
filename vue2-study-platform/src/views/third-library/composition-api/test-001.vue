<template>
  <div>
    <h1>{{count}}</h1>
    <el-button type="primary" @click="addCount">增加</el-button>
  </div>
</template>

<script>
export const name = 'composition-api# 001-HelloWorld';
import { reactive, toRefs } from '@vue/composition-api'

export default {
  // setup 相当于是组件的入口了，可以调用所有组合函数。
  // 最后的return，可以作为出口，确认要暴露给模板哪些内容。
  // setup接收两个参数，props和context
  // props：跟 2.x 的 props 一样，接受父组件传过来的值
  /*
    context：是一个上下文对象，包含了一些2.xthis中的属性
      attrs: Object // => this.$attrs
      emit: f() // => this.$emit
      isServer: false // 是否服务端渲染
      listeners: Object // => this.$listeners
      parent: VueComponent // => this.$parent
      refs: Object // => this.$refs
      root: Vue // => main.js 中的全局唯一的 vue 实例
      slots: {} // => this.$slots
      ssrContext: {} // => 服务端渲染
  */
  setup(props, context) {
    // 对于响应式数据，我们可以通过reactive来创建。
    // 响应式转换是基于es6中的proxy实现的，返回的是一个代理后的对象，并不等于原始对象。
    const state = reactive({
      count: 0
    })
    const addCount = () => {
      state.count++
    }
    // 果要把 {{ state.count }}写成{{ count }}，就需要用toRefs了
    return { state, addCount, ...toRefs(state) }
  },
};
</script>

<style lang="scss" scoped>
</style>