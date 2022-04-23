<template>
  <div>
    <div class="box">
      <button @click="add">增加</button>
      <button @click="minus">减少</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ddd: {
      type: String
    }
  },
  methods: {
    add() {
      this.$emit('input', this.ddd + 1)
    },
    minus() {
      this.$emit('input', this.ddd - 1)
    }
  }
}
</script>

<style scoped>
.box {
  border: 1px solid green;
}
</style>



