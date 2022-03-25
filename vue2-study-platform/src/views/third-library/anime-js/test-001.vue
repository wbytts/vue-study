<template>
  <div>
    <button @click="start">开始</button>
    <div class="box"></div>
  </div>
</template>

<script>
export const name = 'anime.js# test-001';

import anime from 'animejs';

export default {
  methods: {
    start() {
      console.log('开始动画');
      anime({ targets: '.box', translateX: [0, 600], duration: 5000 });
    },
  },
};
</script>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  border: 1px solid red;
}
</style>
