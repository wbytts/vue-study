<template>
  <div>
    <!-- 绑定一个样式对象 -->
    <el-table :data="tableData" border :header-cell-style="{background: '#654321',color:'#909399'}">
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
    </el-table>

    <!-- 这个样式对象可以由函数或动态属性返回 -->
    <el-table :data="tableData" border :header-cell-style="getRowClass">
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export const name = 'ElementUI# Table# 修改表头颜色';

export default {
  data() {
    return {
      tableData: [
        {
          name: 'xxx',
          age: 18,
        },
        {
          name: 'xxx',
          age: 18,
        },
      ],
    };
  },
  methods: {
    getRowClass({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background: #123456';
      } else {
        return '';
      }
    },
  },
};
</script>

<style scoped>
.red {
  color: rgb(51, 206, 134);
}
</style>
