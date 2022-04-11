<template>
  <async-comp></async-comp>
</template>

<script>
/*
由于vue3中函数式组件必须定义为纯函数，异步组件定义时有如下变化：
* 必须明确使用 defineAsyncComponent 包裹
* component 选项重命名为 loader
* Loader函数不再接收resolve和reject，且必须返回一个Promise
*/

import { defineAsyncComponent } from 'vue';

export default {
  components: {
    asyncComp: defineAsyncComponent(() => import('../components/test-async-comp.vue')),
    asyncComp2: defineAsyncComponent({
      loader: () => import('../components/test-async-comp.vue'),
      delay: 200,
      timeout: 3000,
      // errorComponent: //
      // loadingComponent: //
    })
  },
};
</script>

<style>
</style>


