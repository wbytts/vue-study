<template>
  <div>
    <!-- <input id="input" type="text" @input="handleInput" /> -->
    <input ref="qqq" type="text" @input="handleInput" />
  </div>
</template>

<script>
export const name = 'vue-fuxi# 019 ref';

export default {
  mounted() {
    console.log(this);
  },
  methods: {
    handleInput() {
      console.log(this.$refs.qqq.value);
    },
    // handleInput() {
    //   let input = document.getElementById('input');
    //   console.log(input.value);
    // },
    // handleInput(event) {
    //   console.log(event.target.value);
    // },
  },
};
</script>

<style scoped>
input {
  border: 1px solid red;
}
</style>
