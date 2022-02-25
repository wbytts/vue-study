<template>
  <div>
    <el-table :data="tableData" style="width: 100%" strip border>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址">
        <!-- 表头插槽 -->
        <template v-slot:header=" { column, $index }">
          <!-- column是列的信息 -->
          {{column}}
          <hr>
          <!-- $index是列定义的顺序索引 -->
          {{$index}}</template>
        <!-- 内容插槽（默认插槽） -->
        <template v-slot:default=" { row, column, $index }">
          <!-- row包含当前显示的内容的信息 -->
          {{row}} <hr>
          <!-- column显示列信息 -->
          {{column}} <hr>
          <!-- $index显示数据在所有数据中的顺序索引 -->
          {{$index}}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export const name = 'ElementUI# Table# 列插槽';
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
