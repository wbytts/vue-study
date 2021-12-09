<template>
  <div>
    <demo-01>hello</demo-01>
    <anchored-heading level="3">你好啊</anchored-heading>
    <text-jsx-01></text-jsx-01>
    <fun-com-01></fun-com-01>
  </div>
</template>

<script>
export const name = '基本渲染函数例子'

import demo01 from './demo-01.vue'
import Vue from 'vue';
import TextJsx01 from './test-jsx-01.js';
import FunCom01 from './function-component-01.js';


/*
1. render方法从Vue获取一个createElement助手。
2. 我们以编程方式定义我们的标签。
3. 然后，我们创建标签并将其属性，类等作为对象传递。 我们可以传递给createElement的选项很多。
4. 我们返回新创建的元素进行渲染。
*/

Vue.component('anchored-heading', {
  render: function (createElement) {
    /*
      createElement 到底会返回什么呢？其实不是一个实际的 DOM 元素。
      它更准确的名字可能是 createNodeDescription，因为它所包含的信息会告诉 Vue 页面上需要渲染什么样的节点，包括及其子节点的描述信息。
      我们把这样的节点描述为“虚拟节点 (virtual node)”，也常简写它为“VNode”。
      “虚拟 DOM”是我们对由 Vue 组件树建立起来的整个 VNode 树的称呼。
    */
    return createElement(
      'h' + this.level,   // 标签名称
      this.$slots.default // 子节点数组
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
});


export default {
  components: {
    demo01, TextJsx01, FunCom01
  }
}
</script>

<style></style>
