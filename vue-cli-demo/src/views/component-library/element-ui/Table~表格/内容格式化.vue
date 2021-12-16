<template>
  <div>
    <!--
      el-table-column的属性：
        formatter	用来格式化内容；Function(row, column, cellValue, index)
     -->
    <el-table :data="tableData" style="width: 100%" strip border>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址" :formatter="formatAddress"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export const name = 'ElementUI# Table# 内容格式化'
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
  methods: {
    formatAddress(row, column, cellValue, index) {
      // console.log(row, column, cellValue, index);
      let result = <h3>{row.name} 住在 {cellValue}</h3>; // 这个其实是一个 VNode
      console.log(result);
      return result
      // return row.name + ' 住在 ' + cellValue
    }
  }
};
</script>
