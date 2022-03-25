<template>
  <div>
    <zi-01>Hello</zi-01>
  </div>
</template>

<script>
export const name = '#Vue# 默认插槽 default slot';

import Zi01 from './zi-01.vue';
export default {
  components: {
    'zi-01': Zi01,
  },
};
</script>

<style>
</style>
