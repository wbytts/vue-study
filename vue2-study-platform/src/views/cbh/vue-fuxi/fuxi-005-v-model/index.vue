<template>
  <div>
    <input type="text" v-bind:value="value1" @input="value1 = $event.target.value" />
    <input type="text" v-model="value1" />
    <h1>{{value1}}</h1>
    <button @click="handleClick">修改value1为999</button>
  </div>
</template>

<script>
export const name = 'vue-fuxi# 005 v-model';

export default {
  data() {
    return {
      value1: '',
    };
  },
  methods: {
    handleClick() {
      this.value1 = 999;
    },
  },
};
</script>

<style scoped>
input {
  border: 1px solid red;
}
</style>
