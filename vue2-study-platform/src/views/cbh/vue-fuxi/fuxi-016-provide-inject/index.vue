<template>
  <div>
    <Zi />
  </div>
</template>

<script>
export const name = 'vue-fuxi# 016 provide inject';
import Zi from './Zi.vue';

export default {
  provide() {
    return {
      msg: this.msg,
    };
  },
  components: { Zi },
  data() {
    return {
      msg: 'Hello 你好',
    };
  },
};
</script>

<style>
</style>
