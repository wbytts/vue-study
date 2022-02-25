<template>
  <div>
    {{num}} <br />
    <input type="text" v-number:[num] v-model="num" />
  </div>
</template>

<script>
export const name = '指令的基本使用'
export default {
  data() {
    return {
      num: '',
    };
  },
  methods: {},
  // 组件局部指令
  directives: {
    // 指令一般简写写法，在指令所在的元素被绑定或者所在的模板被重新解析时执行
    number(element, binding, vnode, oldVnode) {
      console.log('v-number', binding);
    },
    // 指令的完整写法
    xxx: {
      // 指令与元素成功绑定时
      bind(element, binding, vnode, oldVnode) {},
      // 指令所在元素被插入页面时
      inserted(element, binding, vnode, oldVnode) {},
      // 指令所在模板被重新解析时(指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新)
      update(element, binding, vnode, oldVnode) {},
      // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
      componentUpdated(element, binding, vnode, oldVnode) {},
      // 只调用一次，指令与元素解绑时调用
      unbind(element, binding, vnode, oldVnode) {},
    },
  },
};
</script>

<style>
</style>
