<template>
  <div>
    <el-table :data="tableData" style="width: 100%" strip border>
      <!--
        resizable：对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）
          默认为真
       -->
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <!-- 禁止某个列通过拖动改变列宽 -->
      <el-table-column prop="name" label="姓名" width="180" :resizable="false"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export const name = 'ElementUI# Table# 通过拖动改变列宽'
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
