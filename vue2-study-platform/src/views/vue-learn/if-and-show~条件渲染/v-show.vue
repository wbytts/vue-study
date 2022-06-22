<template>
  <div>
    <el-button type="primary" @click="handleClick">切换flag</el-button>
    <div v-if="flag">{{msg}}</div>
  </div>
</template>

<script>
export const name = 'base# v-show';

export default {
  data() {
    return {
      flag: false,
      msg: '你好啊'
    };
  },
  methods: {
    handleClick() {
      this.flag = !this.flag
      this.msg = 'Hello World'
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
