<template>
  <div>
    <button @click="handleAddLog">添加LOG</button>
    <div>
      <div>{{$store.state.log.lastLog}}</div>
      <hr>
      <ul>
        <li v-for="log in $store.state.log.logs" :key="log">{{log}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export const name = 'vuex# demo';
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations('log', ['ADD_LOG']),
    handleAddLog() {
      this.ADD_LOG(`${moment().format('YYYY-MM-DD HH:mm:ss:SSS')} # 被点击了`);
    },
  },
};
</script>

<style>
</style>
