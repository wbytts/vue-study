<template>
  <div>
    <h3>{{store.msg}}</h3>
    <button @click="change">改变</button>
  </div>
</template>

<script>
export const name = 'Vue.observable 进行简单状态管理';
import { store, mutations } from './store.js';

export default {
  computed: {
    // msg() {
    //   return store.msg;
    // },
    store: () => store
  },
  created() {
    mutations.setMsg('hello world');
  },
  methods: {
    change() {
      mutations.setMsg(Math.random() * 1000);
    }
  }
};
</script>

<style>
</style>