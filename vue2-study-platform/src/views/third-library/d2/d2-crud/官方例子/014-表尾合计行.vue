<template>
  <div>
    <d2-crud :columns="columns" :data="data" :options="options" />
  </div>
</template>

<script>
export const name = 'd2-crud# 官方例子# 014-表尾合计行';

/*
将 options 中的 showSummary 设置为 true 就会在表格尾部展示合计行。
默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过 sumText 配置），其余列会将本列所有数值进行求合操作，并显示出来。
当然，你也可以定义自己的合计逻辑。
使用 summaryMethod 并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的各列中。
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
        showSummary: true,
        summaryMethod(param) {
          const { columns, data } = param;
          const sums = [];
          columns.forEach((column, index) => {
            if (index === 0) {
              sums[index] = '总价';
              return;
            }
            const values = data.map(item => Number(item[column.property]));
            if (!values.every(value => isNaN(value))) {
              sums[index] = values.reduce((prev, curr) => {
                const value = Number(curr);
                if (!isNaN(value)) {
                  return prev + curr;
                } else {
                  return prev;
                }
              }, 0);
              sums[index] += ' 元';
            } else {
              sums[index] = 'N/A';
            }
          });

          return sums;
        },
      },
    };
  },
};
</script>
