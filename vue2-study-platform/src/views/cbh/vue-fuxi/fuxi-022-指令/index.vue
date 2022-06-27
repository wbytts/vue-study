<template>
  <div>
    <h1>Vue指令</h1>
    <!--
      v-text
      v-html
      v-pre
      v-bind
      v-on
      v-cbh-model
      v-xxxx......

      v-cbh-nb
    -->

    <h1 v-cbh-nb>李小龙牛逼</h1>
  </div>
</template>

<script>
export const name = 'vue-fuxi# 022 指令';
export default {
  directives: {
    'cbh-nb': {
      inserted: function (el) {
        console.log('啦啦啦', el);
        el.innerText = '程秉涵牛逼';
      },
    },
  },
};
</script>

<style>
</style>
