<template>
  <div>
      <h1>Hello World {{$store.state.count}}</h1>
      <button @click="handleClick">增加</button>
  </div> 
</template>

<script>
// import logoImg from './logo.png';

export default {
  data() {
    return {
      logoImg: require('@/logo.png')
    }
  },
  methods: {
    handleClick() {
      this.$store.commit('increment');
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>