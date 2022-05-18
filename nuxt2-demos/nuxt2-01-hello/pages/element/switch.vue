<template>
  <div>
    基本使用，绑定一个布尔值
    <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949" />
    <hr>

  </div>
</template>

<script>
export default {
  name: 'ElementSwitchPage',
  data() {
    return {
      value: true
    }
  }
}
</script>

<style></style>
