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
  // props: {
  //   arr: Array
  // }
  data() {
    return {
      arr: []
    }
  },
  created() {
    this.$parent.$children[0].$on('add', (v) => {
      this.arr.push(v);
      console.log(this.arr);
    })
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
