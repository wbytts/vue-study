<template>
  <div>
    <input type="text" v-model="msg" />
    <h1>{{msg}}</h1>
    <button @click="change">改变msg</button>
  </div>
</template>

<script setup>
let msg = $ref('Hello World');
let change = () => (msg = 'Hello World');
</script>

<style lang="scss" scoped>
</style>


