<template>
  <div>
    <!--
      el-table：
          row-class-name：行； Function({row, rowIndex}) / String
          row-style：Function({row, rowIndex}) / Object
          cell-class-name：单元格； Function({row, column, rowIndex, columnIndex}) / String
          cell-style：Function({row, column, rowIndex, columnIndex}) / Object
          header-row-class-name：表头行；Function({row, rowIndex}) / String
          header-row-style：Function({row, rowIndex}) / Object
          header-cell-class-name：Function({row, column, rowIndex, columnIndex}) / String
          header-cell-style：Function({row, column, rowIndex, columnIndex}) / Object

      el-table-column：
          class-name：列的类名
          label-class-name：列标题的类名
    -->
    <el-table :data="tableData" style="width: 100%" strip border>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export const name = 'ElementUI# Table# 自定义类名';
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
    };
  },
};
</script>
