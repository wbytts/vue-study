<template>
  <div>
    <h1 v-if="1+1 == 2">真的</h1>
    <h1 v-if="1+1 == 3">假的</h1>

    <hr />

    <h1 v-show="1+1 == 2">真的</h1>
    <h1 v-show="1+1 == 3">假的</h1>
  </div>
</template>

<script>
export const name = 'vue-fuxi# 002-条件渲染';

export default {};
</script>

<style>
</style>
