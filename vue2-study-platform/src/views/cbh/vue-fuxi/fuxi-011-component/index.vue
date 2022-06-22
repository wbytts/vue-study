<template>
  <div>
    <ButtonCounter />
    <ButtonCounter v-bind:initCount="4" />
    <ButtonCounter v-bind:initCount="5" />
  </div>
</template>

<script>
export const name = 'vue-fuxi# 011 组件基础';
import ButtonCounter from './ButtonCounter.vue';
// Vue.component('button-counter', {
//   data: function () {
//     return {
//       count: 0,
//     };
//   },
//   template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>',
// });

export default {
  components: { ButtonCounter },
};
</script>

<style>
</style>
