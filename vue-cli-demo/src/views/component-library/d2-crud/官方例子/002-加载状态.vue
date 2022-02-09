<template>
  <div>
    <el-button @click="loading=!loading">切换加载状态</el-button>

    <!-- 在 D2 Crud 组件中传入 loading ，即可控制表格加载状态，loading 的可选值为 true 和 false。 -->
    <d2-crud :columns="columns" :data="data" :loading="loading" />
  </div>
</template>

<script>
export const name = 'd2-crud# 官方例子# 002-加载状态';
export default {
  data() {
    return {
      columns: [
        {
          title: '日期',
          key: 'date',
        },
        {
          title: '姓名',
          key: 'name',
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
      loading: true,
    };
  },
};
</script>
