<template>
  <div>
    <ByelRangeInput :value.sync="value" />
    <h1>{{value}}</h1>
  </div>
</template>

<script>
export const name = 'ElementUI# DIY# 区间输入组件 test-01';
import ByelRangeInput from './ByelRangeInput/index.vue';

export default {
  components: { ByelRangeInput },
  data() {
    return {
      value: '',
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>
