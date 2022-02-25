<template>
  <div>
    <div class="box">
      <div>111111111111111111</div>
      <div>111111111111111111</div>
      <div>111111111111111111</div>
      <div>111111111111111111</div>
      <div>111111111111111111</div>
      <div>111111111111111111</div>
      <div>111111111111111111</div>
      <div>111111111111111111</div>
      <div>111111111111111111</div>
      <div>111111111111111111</div>
      <div>111111111111111111</div>
      <div>111111111111111111</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <vue-sticky top="0" style="background: red;">啦啦啦啦</vue-sticky>
      <div>111111111111111111</div>
      <div>111111111111111111</div>
      <div>111111111111111111</div>
      <div>111111111111111111</div>
      <div>111111111111111111</div>
      <div>111111111111111111</div>
      <div>111111111111111111</div>
      <div>111111111111111111</div>
      <div>111111111111111111</div>
      <div>111111111111111111</div>
      <div>111111111111111111</div>
      <div>111111111111111111</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
      <div>22222222222222222</div>
    </div>
  </div>
</template>

<script>
export const name = 'demo# 滚动吸顶# demo-01';
import Sticky from './v-sticky';
import Vue from 'vue';
import VueSticky from './vue-sticky.vue'

// Vue.directive('sticky', Sticky);

export default {
  components: {VueSticky},
  directives: {
    sticky: Sticky,
  },
};
</script>

<style scoped lang="scss">
.box {
  height: 300px;
  overflow: auto;
  position: relative;
}
</style>

