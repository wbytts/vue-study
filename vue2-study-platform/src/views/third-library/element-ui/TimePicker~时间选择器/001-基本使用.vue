<template>
  <div>
    <div>
      <div>value1: {{value1}}</div>
    </div>
    <el-time-picker
      v-model="value1"
      format="HH:mm"
      value-format="HH:mm"
    />
  </div>
</template>

<script>
export const name = 'ElementUI# time-picker# 基本使用'

export default {
  data() {
    return {
      value1: ''
    }
  }
}
</script>

<style>

</style>
