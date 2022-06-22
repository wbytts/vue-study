<template>
  <div>
    <h1 v-on:click="handleClick(123, $event)">你好啊</h1>
    <input type="text" @keyup.native="handleKeyup" />
  </div>
</template>

<script>
export const name = 'vue-fuxi# 006 event';

export default {
  methods: {
    handleClick(x, e) {
      console.log('点击!', x, e);
    },
    handleKeyup(e) {
      console.log('按键抬起', e);
    },
  },
};
</script>

<style scoped>
input {
  border: 1px solid red;
}
</style>
