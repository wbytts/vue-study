<template>
  <div>
    <el-tabs v-model="outActive">
      <el-tab-pane label="AAAAAA" name="A"></el-tab-pane>
      <el-tab-pane label="BBBBBB" name="B">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export const name = 'ElementUI# tabs# 嵌套产生的下划线宽度为0的问题'

export default {
  data() {
    return {
      outActive: 'A',
      activeName: 'first',
    };
  },
  methods: {
    handleClick(tab) {
      console.log(tab);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
