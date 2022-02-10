<template>
  <div>
    <!--
      https://d2.pub/zh/doc/d2-crud-v2
     -->
    <!--
      在 D2 Crud 组件中传入 columns 和 data 对象数组，即可创建一个最基础的表格，
      columns 中的 key 需要与 data 中对象的key严格对照，可以在 columns 对象中传入 width 属性来控制列宽。
     -->
    <d2-crud ref="d2Crud" :columns="columns" :data="data" />
  </div>
</template>

<script>
export const name = 'd2-crud# 官方例子# 001-基础表格';
export default {
  data() {
    return {
      columns: [
        {
          title: '日期',
          key: 'date',
          width: '180',
        },
        {
          title: '姓名',
          key: 'name',
          width: '180',
        },
        {
          title: '地址',
          key: 'address',
        },
      ],
      data: [
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
  mounted() {
    // 可以通过 this.$refs.d2Crud.d2CrudData 拿到变化后的表格数据
    console.log(this.$refs.d2Crud.d2CrudData);
  },
};
</script>
