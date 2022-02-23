<template>
  <div>
    <TopTitle />
    <div class="text">Hello world</div>
  </div>
</template>

<script>
import TopTitle from './title.vue'

export default {
  components: {
    TopTitle
  }
}
</script>

<style lang="scss" scoped>
.text {
  color: red;
}
</style>
