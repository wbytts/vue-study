<template>
  <div>
    <ButtonCounter v-model="count" />
  </div>
</template>

<script>
export const name = 'vue-fuxi# 015 组件上使用v-model';
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
