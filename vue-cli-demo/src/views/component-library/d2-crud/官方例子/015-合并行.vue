<template>
  <div>
    <d2-crud :columns="columns" :data="data" :options="options" />
  </div>
</template>

<script>
export const name = 'd2-crud# 官方例子# 015-合并行';
/*
通过给 options 传入 spanMethod 方法可以实现合并行，方法的参数是一个对象，
里面包含当前行 row 、当前列 column 、当前行号 rowIndex 、当前列号 columnIndex 四个属性。
该函数可以返回一个包含两个元素的数组，第一个元素代表 rowspan ，第二个元素代表 colspan 。
*/
export default {
  data() {
    return {
      columns: [
        {
          title: 'ID',
          key: 'id',
        },
        {
          title: '姓名',
          key: 'name',
        },
        {
          title: '数值 1',
          key: 'amount1',
        },
        {
          title: '数值 2',
          key: 'amount2',
        },
        {
          title: '数值 3',
          key: 'amount3',
        },
      ],
      data: [
        {
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10,
        },
        {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12,
        },
        {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9,
        },
        {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17,
        },
        {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15,
        },
      ],
      options: {
        border: true,
        spanMethod({ row, column, rowIndex, columnIndex }) {
          if (rowIndex % 2 === 0) {
            if (columnIndex === 0) {
              return [1, 2];
            } else if (columnIndex === 1) {
              return [0, 0];
            }
          }
        },
      },
    };
  },
};
</script>
