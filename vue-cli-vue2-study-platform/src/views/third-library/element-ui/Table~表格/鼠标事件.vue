<template>
  <div>
    <!--
      鼠标相关事件（这些是加在 el-table 上）：
      cell-mouse-enter	  当单元格 hover 进入时会触发该事件	      row, column, cell, event
      cell-mouse-leave	  当单元格 hover 退出时会触发该事件	      row, column, cell, event
      cell-click	        当某个单元格被点击时会触发该事件	       row, column, cell, event
      cell-dblclick	      当某个单元格被双击击时会触发该事件	     row, column, cell, event
      row-click	          当某一行被点击时会触发该事件	           row, column, event
      row-contextmenu	    当某一行被鼠标右键点击时会触发该事件	    row, column, event
      row-dblclick	      当某一行被双击时会触发该事件	           row, column, event
      header-click	      当某一列的表头被点击时会触发该事件	     column, event
      header-contextmenu	当某一列的表头被鼠标右键点击时触发该事件  column, event
    -->
    <el-table :data="tableData" style="width: 100%" strip border>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export const name = 'ElementUI# Table# 基本表格的使用';
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
