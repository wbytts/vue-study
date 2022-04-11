<template>
  <test-vmodel v-model:counter="x"/>
  <!-- <test-vmodel :counter="x" @update:counter="x=$event" /> -->
</template>

<script>
/*
vue2中 .sync 和 v-model 功能有重叠，容易混淆
vue3做了统一

直接移除了 .sync
子组件中的model选项移除
*/

import TestVmodel from "../components/test-vmodel.vue"

export default {
  components: {
    TestVmodel
  },
  data() {
    return {
      x: 0
    }
  }
}
</script>

<style>

</style>