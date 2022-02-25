<template>
  <div>
    <!--
      表单 el-form，
      model绑定一个数据对象，用于之后的数据校验，错误提示，字段重置等操作
      label-width 设置默认的el-form-item的label宽度
    -->
    <el-form :model="formData" ref="form" label-width="80px">
      <!--
          el-form-item 表单项，
          label显示字段名称, label-width即宽度
          其prop设置表单校验时选取的属性
          也用于定位错误信息的显示位置
          里面可以放表单标签，也可以不放~

          如果不设置标签宽度，默认标签会撑开
          但如果表单是inline的，则不会
       -->
      <el-form-item label="用户名" prop="username">
        <!--
          默认会撑开，但如果表单是inline的，则不会
          原因是 el-form-item 不会撑开
         -->
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="formData.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export const name = 'ElementUI# Form# 基本使用'

export default {
  data() {
    return {
      formData: {
        username: '',
        password: ''
      },
    };
  },
};
</script>

<style>
</style>
