<template>
  <div>
    <el-input v-model="msg" placeholder="请输入内容"></el-input>
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'ElementInputPage',
  data() {
    return {
      msg: '',
    }
  },
}
</script>

<style></style>
