<template>
  <div>
    <button v-on:click="handleClick">count = {{ count }}</button>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$emit('update:count', this.count + 1);
    },
  },
};
</script>

<style scoped>
button {
  border: 1px solid green;
  width: 300px;
  height: 80px;
  font-size: 24px;
}
</style>
