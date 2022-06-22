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
    addCount: {
      type: Function,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      // this.count++
      this.addCount();
    },
  },
  mounted() {},
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
