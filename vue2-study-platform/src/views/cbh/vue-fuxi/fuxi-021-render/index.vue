<template>
  <div>
    <TestJsx :msg="'Hello World 你好啊'" />
    <Hx level="1" text="Hello World" />
    <Hx level="2" text="Hello World" />
    <Hx level="3" text="Hello World" />
    <Hx level="4" text="Hello World" />
    <Hx level="5" text="Hello World" />
    <Hx level="6" text="Hello World" />
  </div>
</template>

<script>
export const name = 'vue-fuxi# 021 render 渲染函数';
import TestJsx from './TestJsx.js';
import Hx from './hx.js';
export default {
  components: { TestJsx, Hx },
};
</script>

<style>
</style>
