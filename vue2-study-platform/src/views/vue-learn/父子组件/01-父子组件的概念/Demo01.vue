<template>
  <div>
    <slot></slot>

    <slot name="input"></slot>
    <br>

    <slot name="btns"></slot>

    <button @click="xxx">子元素的按钮</button>
  </div>
</template>

<script>
export default {
  methods: {
    xxx() {
      console.log('产生事件');
      this.$emit('我记不得了')
    }
  }
}
</script>

<style>

</style>
