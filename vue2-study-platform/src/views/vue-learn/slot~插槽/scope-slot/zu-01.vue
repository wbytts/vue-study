<template>
  <div>
    <slot name="title" :info="info">

    </slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        name: 'wby',
        age: 18
      }
    }
  }
}
</script>

<style>

</style>