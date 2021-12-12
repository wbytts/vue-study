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
import 公告板 from './公告板'

export default {
  data() {
    return {
      arr: []
    }
  },
  created() {
    公告板.$on('zi-01-add', v => this.arr.push(v))
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
