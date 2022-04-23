<template>
  <div>
    <button @click="handleClick">按钮</button>
    <h1 id="hhhhh">hello world</h1>
  </div>
</template>

<script>
export const name = 'jquery# test-001'

export default {
  methods: {
    handleClick() {
      $('#hhhhh').css('color', 'red');
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

