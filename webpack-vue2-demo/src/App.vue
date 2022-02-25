<template>
  <div>
      <h1>Hello World {{$store.state.count}}</h1>
      <button @click="handleClick">增加</button>
      <img src="./logo.png"/>
  </div> 
</template>

<script>

export default {
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