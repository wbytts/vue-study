<template>
  <div>
    <button @click="flag=!flag">切换</button>
    <hook-a v-if="flag"/>
  </div>
</template>

<script>
export const name = 'hookEvent# 监听生命周期事件的另一种方式';
import HookA from './hook-a.vue';

export default {
  components: {HookA},
  data() {
    return {
      flag: false
    }
  }
}
</script>

<style>

</style>
