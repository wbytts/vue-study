<template>
  <div class="main">
    zi-01
    <hr>
    <input type="text" v-model="input">
    <button @click="add">添加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  },
  methods: {
    add() {
      console.log('添加', this.input);
      this.$emit('add', this.input)
    }
  }
}
</script>

<style scoped>
.main {
  width: 400px;
  height: 100px;
  border: 1px solid red;
}
</style>
