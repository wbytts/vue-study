<template>
  <div>
    <ButtonCounter :count="count" :addCount="addCount" />
  </div>
</template>

<script>
export const name = 'vue-fuxi# 012 props接收函数';
import ButtonCounter from './ButtonCounter.vue';

export default {
  components: { ButtonCounter },
  data() {
    return {
      count: 100,
    };
  },
  methods: {
    addCount() {
      this.count++;
    },
  },
};
</script>

<style>
</style>
