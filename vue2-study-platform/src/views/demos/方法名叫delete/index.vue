<template>
  <div>
    <el-button @click="(_self.delete)(33333)">按钮</el-button>
  </div>
</template>

<script>
export const name = 'demo# 方法名叫delete';

export default {
  methods: {
    delete(x) {
      console.log('这里是delete方法, 参数=', x);
    },
  },
  mounted() {
    console.log('this', this);
  },
};
</script>

<style lang="scss" scoped>
</style>
