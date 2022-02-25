<template>
  <div>
    <input type="radio" v-model="value" value="Java"> Java <br />
    <input type="radio" v-model="value" value="Python"> Python <br />
    <input type="radio" v-model="value" value="Go"> Go <br />
    <input type="radio" v-model="value" value="Rust"> Rust <br />
  </div>
</template>

<script>
export const name = '单选框绑定 #base #表单绑定'

export default {
  data() {
    return {
      value: 'Python'
    }
  }
}
</script>

<style>

</style>
