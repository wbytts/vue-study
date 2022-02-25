<template>
  <div>
    <button @click="handleAddLog">添加LOG</button>
  </div>
</template>

<script>
export const name = 'vuex# demo';
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations('log', ['ADD_LOG']),
    handleAddLog() {
      this.ADD_LOG(`${new Date()}被点击了`);
    },
  },
};
</script>

<style>
</style>
