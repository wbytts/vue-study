<template>
  <comp />
</template>

<script>
/*
vue2中有很多全局api可以改变vue的行为，如 Vue.component 等
这导致一些问题：
1. vue2没有app的概念，new Vue 得到的根实例被作为app，
这样的话所有创建的根实例是共享相同的向全局配置，
这在测试时会污染其他测试用例，导致测试变的困难
2. 全局配置也导致没有办法在单页面创建爱你不同全局配置的多个app实例

vue3使用createApp返回app实例，并由它暴露一系列全局api

Vue.config ===> app.config
Vue.config.productionTop ===> 移除
Vue.config.ignoreElements ===> app.config.isCustomElement
Vue.component ===> app.component
Vue.directive ===> app.directive
Vue.mixin ===> app.mixin
Vue.use ===> app.use
Vue.filter ===> 移除


*/

export default {

}
</script>

<style>

</style>