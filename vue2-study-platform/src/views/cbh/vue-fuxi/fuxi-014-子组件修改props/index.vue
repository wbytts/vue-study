<template>
  <div>
    <ButtonCounter :count.sync="count" />
  </div>
</template>

<script>
export const name = 'vue-fuxi# 014 子组件修改props';
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
