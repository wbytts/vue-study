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
      <div v-sticky-body-top>啦啦啦啦</div>
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
export const name = 'demo# 滚动吸顶# demo-02';
import Sticky from './v-sticky';
import Vue from 'vue';
import VueSticky from './vue-sticky.vue';

export default {
  components: { VueSticky },
  directives: {
    'sticky-body-top': {
      inserted(el, binding, vnode) {
        window.onscroll = function (event) {
          let scrollTop = window.pageYOffset || document.documentELement.scrollTop || document.body.scrollTop || 0;
          let { top } = el.getBoundingClientRect();
          console.log(window.receiptConfirmationFixedTop, scrollTop);
          if (window.receiptConfirmationFixedTop && scrollTop < window.receiptConfirmationFixedTop) {
            el.style.position = 'relative';
            el.style.top = 'inherit';
            return;
          }
          if (top < 0) {
            window.receiptConfirmationFixedTop = scrollTop;
            el.style.position = 'fixed';
            el.style.top = '0';
          }
        };
      },
      unbind() {
        console.log('解绑');
        window.onscroll = null;
      },
      componentUpdated() {
        console.log('组件更新');
      },
    },
  },
};
</script>

<style scoped lang="scss">
.box {
  overflow: auto;
  position: relative;
}
</style>
