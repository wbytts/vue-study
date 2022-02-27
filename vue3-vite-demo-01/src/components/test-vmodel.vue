<template>
  <div @click="$emit('update:counter', counter + 1)">
    <h1>counter: {{ counter }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    counter: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style>
</style>