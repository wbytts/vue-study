<template>
  <div>
    <button v-on:click="handleClick">count = {{ value }}</button>
  </div>
</template>

<script>
export default {
  props: {
    value: Number,
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$emit('input', this.value + 1);
    },
  },
  mounted() {
    console.log(this);
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
