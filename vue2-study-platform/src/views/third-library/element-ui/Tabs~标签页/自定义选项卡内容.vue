<template>
  <div>
    <button @click="isShowTabs = !isShowTabs">切换</button>
    <el-tabs v-model="activeName" v-if="isShowTabs" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export const name = 'ElementUI# tabs# 选项卡标签自定义'

export default {
  data() {
    return {
      activeName: 'first',
      isShowTabs: false
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
