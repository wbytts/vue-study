<template>
  <div>
    <input type="text" v-model="value">

    <input type="checkbox" v-model="value" true-value="yes" false-value="no">
  </div>
</template>

<script>
export const name = '复选框绑定-真假 #base #表单绑定'

export default {
  data() {
    return {
      value: 'yes'
    }
  }
}
</script>

<style>

</style>
