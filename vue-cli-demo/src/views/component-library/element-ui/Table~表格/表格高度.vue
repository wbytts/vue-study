<template>
  <div>
    <!--
      height：默认是自动高度
        如果 height 为 number 类型，单位 px
        如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值
        Table 的高度会受控于外部样式
      max-height：表格的最大高度
        合法的值为数字或者单位为 px 的高度
     -->
    <el-table :data="tableData" style="width: 100%" strip border>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export const name = 'ElementUI# Table# 基本表格的使用'
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
