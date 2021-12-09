<template>
  <div>
    <!--
      永远不要将 v-for 和 v-if 同时用在同一个元素上
      在 vue 处理指令的时候,v-for比v-if会有更高的优先级
      即使大部分数据都不需要渲染，v-for也会扫描所有数据

      可以通过方法动态计算要遍历的数组
    -->
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
