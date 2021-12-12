<template>
  <div class="main">
    zi-02
    <hr>
    <ul>
      <li v-for="item in arr" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    arr: Array
  }
  // data() {
  //   return {
  //     arr: []
  //   }
  // }
}
</script>

<style scoped>
.main {
  width: 400px;
  height: 300px;
  border: 1px solid green;
}
</style>
