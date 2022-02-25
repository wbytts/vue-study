<template>
  <div>
    <input type="radio" :value="true" v-model="flag">
    <input type="radio" :value="false"  v-model="flag">

    <!--
      v-if值为假的时候，不会渲染这个元素！
     -->
    <h1 v-if="flag">X</h1>

    <!--
      v-show通过css样式控制元素的显示与隐藏
      style="display: none;"
      在模板解析的时候仍然会渲染这个元素
     -->
    <h1 v-show="flag">X</h1>
  </div>
</template>

<script>
export const name = '条件渲染，v-if、v-show'
export default {
  data() {
    return {
      flag: false
    }
  }
}
</script>

<style></style>
