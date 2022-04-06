<template>
  <div>
    <button @click="handleClick">里面修改</button>
    <h1>{{val}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    val: String
  },
  methods: {
    handleClick() {
      this.$emit('update:val', Math.random() + '')
    }
  }
}
</script>

<style>

</style>
