<template>
  <div>
    <d2-crud :columns="columns" :data="data" :options="options" :rowHandle="rowHandle" @row-remove="handleRowRemove" />
  </div>
</template>

<script>
export const name = 'd2-crud# 官方例子# 008-流体高度';

// 通过在 options 对象设置 maxHeight 属性为 D2 Crud 指定最大高度。
// 此时若表格所需的高度大于最大高度，则会显示一个滚动条。

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
          title: '省份',
          key: 'province',
        },
        {
          title: '市区',
          key: 'city',
        },
        {
          title: '地址',
          key: 'address',
          width: '300',
        },
        {
          title: '邮编',
          key: 'zip',
        },
      ],
      data: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
      ],
      options: {
        maxHeight: '250',
      },
      rowHandle: {
        remove: {
          size: 'mini',
          confirm: false,
        },
      },
    };
  },
  methods: {
    handleRowRemove({ index, row }, done) {
      this.$message({
        message: '删除成功',
        type: 'success',
      });
      done();
    },
  },
};
</script>
