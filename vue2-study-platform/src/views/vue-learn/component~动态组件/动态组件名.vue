<template>
  <div>
    <el-input-number v-model="level" :min="1" :max="6" ></el-input-number>
    <component :is="'h' + level">hello</component>
  </div>
</template>

<script>
export const name = 'component# 动态组件名'

export default {
  data() {
    return {
      level: 1
    }
  }
}
</script>

<style>

</style>


