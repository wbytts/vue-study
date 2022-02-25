<template>
  <div class="main">
    zi-02
    <hr>
    <button @click="handleClick">按钮</button>
    <ul>
      <li v-for="item in arr" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: []
    }
  },
  created() {
    this.$parent.$on('zi-01-add', v => this.arr.push(v))
  },
  methods: {
    add(value) {
      this.arr.push(value);
    },
    handleClick() {
      console.log(this);

    }
  }
}
</script>

<style scoped>
.main {
  width: 400px;
  height: 300px;
  border: 1px solid green;
}
</style>
