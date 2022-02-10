<template>
  <div>
    <el-table :data="tableData" style="width: 100%" strip border>
      <!--
        align：数据单元格内容对齐
        header-align：表头单元格内容对齐
      -->
      <el-table-column prop="date" label="日期" width="200" align="center" header-align="center"></el-table-column>
      <el-table-column prop="name" label="姓名" width="200" align="left" header-align="left"></el-table-column>
      <el-table-column prop="address" label="地址" width="500" align="right" header-align="right"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export const name = 'ElementUI# Table# 内容对齐';
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
