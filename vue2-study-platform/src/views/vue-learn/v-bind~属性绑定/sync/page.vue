<template>
  <div>
    <button @click="handleClick">外面修改</button>
    <ComSync v-bind:val.sync="v"></ComSync>
    <hr>
    <h1>外面的值：{{v}}</h1>
  </div>
</template>

<script>
export const name = 'v-bind的sync修饰符'

import ComSync from './com-sync.vue';

export default {
  components: {ComSync},
  data() {
    return {
      v: 'hello world'
    }
  },
  methods: {
    handleClick() {

    }
  }
}
</script>

<style>

</style>
