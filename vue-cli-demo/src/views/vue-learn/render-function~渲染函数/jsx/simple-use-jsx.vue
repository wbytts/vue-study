<template>
  <div>
    <by-btn text="按牛"/>
    <by-box>
      hello
    </by-box>
  </div>
</template>

<script>
export const name = 'JSX# 简单使用JSX';
import ByBtn from './by-btn.js';
import ByBox from './by-box.js';

export default {
  components: {
    ByBtn, ByBox
  }
}
</script>

<style>

</style>
