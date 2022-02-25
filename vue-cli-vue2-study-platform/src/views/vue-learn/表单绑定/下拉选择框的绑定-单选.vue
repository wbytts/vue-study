<template>
  <div>
    <h1>{{value}}</h1>
    <select v-model="value">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
export const name = '下拉选择框的绑定-单选 #base #表单绑定'

export default {
  data() {
    return {
      value: 1
    }
  }
}
</script>

<style>

</style>
