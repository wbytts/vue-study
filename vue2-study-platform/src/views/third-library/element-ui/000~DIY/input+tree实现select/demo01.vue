<template>
  <div>
    <el-input
      placeholder="默认一级部门"
      v-model="parentName"
      icon="el-icon-caret-bottom"
      readonly="readonly"
      @click.native="isShowSelect = !isShowSelect"
    ></el-input>
    <el-tree
      v-if="isShowSelect"
      empty-text="暂无数据"
      :data="dept"
      :props="defaultProps"
      accordion
      @node-click="handleNodeClick"
      class="menu-tree"
    ></el-tree>
  </div>
</template>

<script>
export const name = 'ElementUI~DIY input+tree实现select'

export default {
  data() {
    return {
      isShowSelect: false,
      defaultProps: {
        children: 'storeDeptBeans', // 子级
        label: 'deptName',
      },
      parentName: '',
    };
  },
  methods: {
    handleNodeClick(data, Node) {
      this.form.parentId = data.id;
      this.parentName = data.deptName;
      // 关闭选择器
      this.isShowSelect = false;
    },
  },
};
</script>


<style scoped>
  .menu-tree {
    position: absolute;
    overflow: auto;
    z-index: 100;
    width: 100%;
    min-height: 80px;
    padding: 9px;
    border: 1px solid #e4e7ed;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    border-radius: 4px;
    margin-top: 2px;
  }
</style>
