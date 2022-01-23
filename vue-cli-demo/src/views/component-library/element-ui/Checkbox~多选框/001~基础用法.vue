<template>
  <div>
    <!-- `checked` 为 true 或 false -->
    <el-checkbox v-model="checked">备选项</el-checkbox>
    <!-- disabled 禁用状态 -->
    <el-checkbox v-model="checked" disabled>备选项</el-checkbox>
    <h1>checked: {{checked}}</h1>
  </div>
</template>

<script>
export const name = 'ElementUI# Checkbox# 001~基础用法'

export default {
  data() {
    return {
      checked: false,
    }
  }
}
</script>

<style>

</style>
