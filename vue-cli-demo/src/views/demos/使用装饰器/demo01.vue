<template>
  <div>
    <button @click="handleClick">按钮</button>
  </div>
</template>

<script>
export const name = '装饰器在vue组件中的基本使用 #装饰器';
import { loading, log, debounce, throttle } from './decorators';

export default {
  methods: {
    @loading()
    @log()
    handleClick() {
      console.log('点击了按钮...');
      for(let i=0; i<10000; i++) console.log('hello', i);
    },
  },
};
</script>

<style>
</style>
