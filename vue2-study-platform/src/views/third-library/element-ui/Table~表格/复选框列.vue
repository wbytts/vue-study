﻿<template>
  <div>
    <el-table :data="tableData" style="width: 100%" strip border size="mini">
      <!--
        有复选框的列，type="selection"
        此时不需要再设置 label，没有效果

        selectable 接收一个函数，
          函数参数为 (row, index)
          函数的返回值用来决定这一行的 CheckBox 是否可以勾选

        表格相关事件：
          select(selection, row)	      当用户手动勾选数据行的 Checkbox 时触发的事件
          select-all(selection)	        当用户手动勾选全选 Checkbox 时触发的事件
          selection-change(selection)	  当选择项发生变化时会触发该事件

        表格相关方法：
          clearSelection                      用于多选表格，清空用户的选择
          toggleRowSelection(row, selected)   用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）
          toggleAllSelection                  用于多选表格，切换所有行的选中状态
          setCurrentRow(row)                  用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。
      -->
      <el-table-column label="选项" type="selection" :selectable="canSelect"></el-table-column>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export const name = 'ElementUI# Table# 复选框列';
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
    canSelect(row, index) {
      return index % 3 != 1;
    },
  },
};
</script>
