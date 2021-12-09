<template>
  <div>
    <h1>{{value}}</h1>
    <input type="checkbox" v-model="value" value="Java"> Java <br />
    <input type="checkbox" v-model="value" value="Python"> Python <br />
    <input type="checkbox" v-model="value" value="C++"> C++ <br />
    <input type="checkbox" v-model="value" value="Go"> Go <br />
    <input type="checkbox" v-model="value" value="Rust"> Rust <br />
    <input type="checkbox" v-model="value" value="Kotlin"> Kotlin <br />
    <input type="checkbox" v-model="value" value="Groovy"> Groovy <br />
  </div>
</template>

<script>
export const name = '复选框绑定-数组 #base #表单绑定'

export default {
  data() {
    return {
      value: ['Java', 'Go', 'Rust']
    }
  }
}
</script>

<style>

</style>
