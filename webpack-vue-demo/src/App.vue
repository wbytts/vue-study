<template>
  <div>
      <h1>Hello World 134</h1>
      <img :src="logoImg"/>
  </div> 
</template>

<script>
// import logoImg from './logo.png';

export default {
  data() {
    return {
      logoImg: require('@/logo.png')
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>