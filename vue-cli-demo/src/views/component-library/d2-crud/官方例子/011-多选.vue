<template>
  <div>
    <d2-crud :columns="columns" :data="data" selection-row @selection-change="handleSelectionChange" />
  </div>
</template>

<script>
export const name = 'd2-crud# 官方例子# 011-多选';

/*
D2 Crud 组件提供了多选的支持，只需要配置 selection-row 属性即可实现多选。
之后由 selection-change 事件来管理选择项发生变化时触发的事件，它会传入 selection 。
*/

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
    };
  },
  methods: {
    handleSelectionChange(selection) {
      console.log(selection);
    },
  },
};
</script>
