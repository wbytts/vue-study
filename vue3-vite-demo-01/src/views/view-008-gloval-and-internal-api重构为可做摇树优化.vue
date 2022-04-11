<template>

</template>

<script>
/*
vue2中不少global-api是作为静态函数直接挂在构造函数上的
如果我们在代码中没有用到过他们，就会形成所谓的 dead code
这类global-api造成的dead code无法使用webpack的tree-shaking排除掉

vue3做了相应的变化，将它们抽取为独立函数
这样打包工具的摇树优化可以将这些dead code排除掉
受影响的api：
  * Vue.nextTick
  * Vue.observable (用Vue.reactive替换)
  * Vue.version
  * Vue.compile （仅在 full builds）
  * Vue.set （仅在 compat builds）
  * Vue.delete （仅在 compat builds）
*/
export default {

}
</script>

<style>

</style>