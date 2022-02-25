<template>
  <div>
    <el-radio-group v-model="radio" @change="radioChange">
      <el-radio :label="3">选项1</el-radio>
      <el-radio :label="6">选项2</el-radio>
      <el-radio :label="9">选项3</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export const name = 'ElementUI#Radio# 单选框变化触发事件'

export default {
  data() {
    return {
      radio: 3,
    };
  },
  methods: {
    radioChange(value) {
      console.log('单选框选项改变，当前值为: ', value)
    }
  }
};
</script>

<style>
</style>
