<template>
  <test-function-comp level="3">test</test-function-comp>
</template>

<script>
/*
函数式组件变化较大，主要有：
* 性能提升在vue3中可忽略不计，所以vue3中推荐使用状态组件
* 函数式组件仅能通过纯函数形式声明，接收props和context两个参数
* SFC中template不能添加functional特性声明函数式组件
* { functional: true } 组件选项移除
*/
import TestFunctionComp from '../components/test-function-comp.vue'


export default {
  components: {
    TestFunctionComp
  }
}
</script>

<style>
</style>




