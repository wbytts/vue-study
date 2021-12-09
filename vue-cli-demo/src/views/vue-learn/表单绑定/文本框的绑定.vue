<template>
  <div>
    <h1>{{msg}}</h1>
    <input type="text" v-model="msg">
  </div>
</template>

<script>
export const name = '文本输入值（单行）与数据的绑定 #base #表单绑定'

export default {
  data() {
    return {
      msg: ''
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
