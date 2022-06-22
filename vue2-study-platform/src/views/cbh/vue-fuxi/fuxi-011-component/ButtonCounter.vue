<template>
  <div>
    <button v-on:click="count++">count = {{ count }}</button>
    <button @click="count = 0">归零</button>
  </div>
</template>

<script>
export default {
  props: {
    // initCount: Number,
    initCount: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      count: 0,
      // initCount: 999999,
    };
  },
  mounted() {
    // this.count = this.$attrs.initCount;

    // if (typeof this.initCount !== 'number') {
    //   throw new Error('必须传递数字');
    // }

    this.count = this.initCount;
    console.log('子组件的this -->', this);
    console.log('子组件的this.initCount -->', this.initCount);
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
