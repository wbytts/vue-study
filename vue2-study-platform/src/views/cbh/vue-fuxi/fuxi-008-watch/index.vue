<template>
  <div>
    <h1>监听器、侦听器</h1>
    <input type="text" v-model="obj.x" />
    <br />
    a: <input type="text" v-model="a" />
    <br />
    b: <input type="text" v-model="b" />
  </div>
</template>

<script>
export const name = 'vue-fuxi# 008 watch';

export default {
  data() {
    return {
      a: '',
      b: '',
      x: '',
      obj: {
        x: '',
      },
    };
  },
  created() {
    let unwatch = this.$watch(
      () => this.a + this.b,
      (newVal, oldVal) => {
        console.log(newVal, oldVal);
      },
    );
  },
  watch: {
    obj: {
      handler(newVal, oldVal) {
        console.log(newVal, oldVal);
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
input {
  border: 1px solid red;
}
</style>
