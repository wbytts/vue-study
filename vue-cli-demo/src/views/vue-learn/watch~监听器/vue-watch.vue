<template>
  <div>
    <button @click="changeN">改变</button>
    <br />
    {{n}}
  </div>
</template>

<script>
export const name = 'base#watch# Vue.watch 和 this.$watch'
export default {
  data() {
    return {
      n: 0
    }
  },
  methods: {
    changeN() {
      this.n = Math.random();
    }
  },
  mounted() {
    this.$watch('n', (n, o) => console.log(n, o));
    this.n = 100;
  }
}
</script>
</script>

<style>

</style>
