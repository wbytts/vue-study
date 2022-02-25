<template>
  <div>
    <button @click="flag=!flag">切换</button>
    <hook-b
      v-if="flag"
      ref="hb"
      @hook:beforeCreate="show('beforeCreate')"
      @hook:created="show('created')"
      @hook:beforeMount="show('beforeMount')"
      @hook:mounted="show('mounted')"
      @hook:beforeUpdate="show('beforeUpdate')"
      @hook:updated="show('updated')"
      @hook:beforeDestroy="show('beforeDestroy')"
      @hook:destroyed="show('destroyed')"
    />
  </div>
</template>

<script>
export const name = 'hookEvent# 外部监听组件的生命周期';
import HookB from './hook-b.vue';

export default {
  components: { HookB },
  data() {
    return {
      flag: false,
    };
  },
  methods: {
    show(msg) {
      console.log(msg, this.$refs.hb);
    },
  },
};
</script>

<style>
</style>