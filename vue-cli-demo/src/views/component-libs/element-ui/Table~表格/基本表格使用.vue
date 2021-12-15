<template>
  <div>
    <!--
      el-table常用属性：
        data：提供表格的数据
        stripe：斑马条纹，默认false
        border：纵向边框，默认false
        size：表格尺寸，可选的有 medium / small / mini
     -->
    <el-table :data="tableData" style="width: 100%" strip border>
      <!--
        label：显示的标题
        prop：对应列内容的字段名（也可以使用 property 属性）
        width：对应列的宽度   
        min-width：对应列的最小宽度，与 width 的区别是 width 是固定的
                    min-width 会把剩余宽度按比例分配给设置了 min-width 的列
        align：列里面内容的对齐方式
       -->
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export const name = 'ElementUI# 基本表格的使用'
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
