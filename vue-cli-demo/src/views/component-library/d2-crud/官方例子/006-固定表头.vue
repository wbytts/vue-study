<template>
  <div>
    <d2-crud :columns="columns" :data="data" :options="options" />
  </div>
</template>

<script>
export const name = 'd2-crud# 官方例子# 006-固定表头';
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
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
      ],
      options: {
        // 只要在 options 对象中定义了 height 属性，即可实现固定表头的表格，而不需要额外的代码。
        height: '250',
      },
    };
  },
};
</script>
