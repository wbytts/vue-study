<template>
  <div>
    <ButtonCounter :count="count" v-on:快给count加一="count++" />
  </div>
</template>

<script>
export const name = 'vue-fuxi# 013 子组件的事件';
import ButtonCounter from './ButtonCounter.vue';

export default {
  components: { ButtonCounter },
  data() {
    return {
      count: 100,
    };
  },
  methods: {},
};
</script>

<style>
</style>
