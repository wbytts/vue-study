<template>
  <div>
    <button @click="changeN">改变</button>
    <br />
    {{ n }}
  </div>
</template>

<script>
export const name = 'base#watch#，基本使用';
export default {
  data() {
    return {
      n: 0,
    };
  },
  methods: {
    changeN() {
      this.n = Math.random();
    },
  },
  watch: {
    n(newValue, oldValue) {
      console.log(newValue, oldValue);
    },
  },
};
</script>

<style>
</style>
