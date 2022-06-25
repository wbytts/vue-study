<template>
  <div>
    <div>{{checkedRow}}</div>
    <el-table :data="tableData" style="width: 100%" strip border>
      <el-table-column width="80">
        <template #default="{ row }">
          <el-badge
            :value="checkedRow.indexOf(row.id) + 1"
            :hidden="checkedRow.indexOf(row.id) + 1 == 0"
            class="badge-item"
            type="success"
          >
            <el-checkbox v-model="checkedRow" :label="row.id"></el-checkbox>
          </el-badge>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export const name = 'ElementUI# Table# 自定义按顺序勾选图标';
export default {
  data() {
    return {
      checkedRow: [],
      tableData: [
        {
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .el-checkbox__label {
    display: none;
  }
  .el-table .cell {
    overflow: visible;
  }
}

</style>
