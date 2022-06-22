<template>
  <div>
    <input type="text" v-model="message" />
    <div>{{message.toUpperCase()}}</div>
    <div v-text="message"></div>
    <div v-html="message"></div>
    <div v-once>{{message}}</div>
    <div v-pre>{{message}}</div>
    <!-- <div v-cloak>{{message}}</div> -->
  </div>
</template>

<script>
export const name = 'vue-fuxi# 001-vbind';
import ZuJian from './ZuJian.vue';

export default {
  components: { ZuJian },
  data() {
    return {
      message: '<h1 style="color: red;">Hello World</h1>',
    };
  },
};
</script>

<style>
</style>
