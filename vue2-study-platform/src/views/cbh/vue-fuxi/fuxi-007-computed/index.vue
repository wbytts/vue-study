<template>
  <div>
    <h1>计算属性</h1>
    <input type="text" v-model="firstName" />
    <input type="text" v-model="lastName" />

    <br />
    <input type="text" v-model="fullName" />

    <h1>{{fullName}}</h1>
    <h1>{{fullName}}</h1>
    <h1>{{fullName}}</h1>
  </div>
</template>

<script>
export const name = 'vue-fuxi# 007 计算属性';

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
    };
  },
  methods: {
    getFullName() {
      console.log('方法: 计算FullName');
      return this.firstName + this.lastName;
    },
  },
  computed: {
    fullName: {
      get() {
        console.log('计算属性: 计算FullName');
        return this.firstName + this.lastName;
      },
      set(value) {
        this.firstName = value.substring(0, value.length / 2);
        this.lastName = value.substring(value.length / 2, value.length);
      },
    },
  },
};
</script>

<style scoped>
input {
  border: 1px solid red;
}
</style>
