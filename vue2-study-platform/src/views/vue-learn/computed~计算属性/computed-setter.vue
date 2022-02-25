<template>
  <div>
    x: <input type="text" v-model.number="x"> <br>
    y: <input type="text" v-model.number="y"> <br>
    x + y: <input type="text" v-model.number="result"> 计算属性
  </div>
</template>

<script>
export const name = '计算属性的setter'
export default {
  data() {
    return {
      x: 0,
      y: 0
    }
  },
  computed: {
    result: {
      get() {
        return this.x + this.y
      },
      set(newValue) {
        this.x = this.y = newValue / 2
      }
    }
  }
}
</script>

<style>

</style>
