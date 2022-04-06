<template>
  <div>
    <temp-var :x="1+1" :y="2+2">
      <template v-slot="{x, y}">
        <h1>{{x}}</h1>
        <h1>{{y}}</h1>
      </template>
    </temp-var>
  </div>
</template>

<script>
export const name = '函数式组件# 使用函数式组件提供临时变量';
import TempVar from './TempVar';

export default {
  components: { TempVar },
  data() {
    return {};
  },
};
</script>

<style>
</style>
