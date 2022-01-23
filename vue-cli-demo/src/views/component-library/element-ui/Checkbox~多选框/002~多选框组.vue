<template>
  <div>
    <!--
      将 v-model 绑定到 el-checkbox-group
      得到的是选中项的数组
     -->
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
      <el-checkbox label="禁用" disabled></el-checkbox>
      <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group>
    <h1>{{checkList}}</h1>
  </div>
</template>

<script>
export const name = 'ElementUI# Checkbox# 002~多选框组';

export default {
  data() {
    return {
      checkList: ['选中且禁用', '复选框 A'],
    };
  },
};
</script>
