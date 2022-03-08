<template>
  <div>
    <test-v-model v-model="text" />
    <div>{{text}}</div>
  </div>
</template>

<script>
export const name = 'v-model# 在自定义组件上使用 v-model';
import TestVModel from './TestVModel.vue';

export default {
  components: {
    'test-v-model': TestVModel,
  },
  data() {
    return {
      text: '',
    };
  },
};
</script>

<style>
</style>
