<template>
  <div>
    <canvas></canvas>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String
    },
    page: {
      type: Number
    }
  },
  created() {
    console.log(jspdflib);
  }
}
</script>

<style>

</style>
