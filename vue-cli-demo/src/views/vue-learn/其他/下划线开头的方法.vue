<template>
  <div>
    <!--
      在 vue 中定义私有属性/方法又与 js 常规约定有所不同。
      在 Vue 内部，已经使用了_开头去定义 Vue 原型上面的私有属性/方法，
      如果在组件内上面继续使用_开头去定义私有属性/方法可能会出现覆盖实例上面属性/方法的情况
      ：
      在 Vue2.0 风格指南中，建议使用 $_xxx 来定义私有方法，可以确保不会和 Vue 自身发生冲突
    -->：
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
