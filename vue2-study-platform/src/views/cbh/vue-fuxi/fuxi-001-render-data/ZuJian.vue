<template>
  <div>
    <input type="text" v-model="msg" />
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  data: {
    msg: '啦啦啦',
  },
};
</script>

<style>
</style>
