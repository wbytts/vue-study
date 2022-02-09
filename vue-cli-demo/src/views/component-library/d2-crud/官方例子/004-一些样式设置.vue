<template>
  <div>
    <d2-crud :columns="columns" :data="data" :options="options" />
  </div>
</template>

<script>
export const name = 'd2-crud# 官方例子# 004-一些样式设置';
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
      options: {
        stripe: true, // 带斑马纹表格
        border: true, // 带边框表格
      },
    };
  },
};
</script>


