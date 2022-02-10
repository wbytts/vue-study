<template>
  <div>
    <d2-crud
      :columns="columns"
      :data="data"
      :options="options"/>
  </div>
</template>

<script>
export const name = 'd2-crud# 官方例子# 012-排序';
export default {
  data () {
    return {
      columns: [
        {
          title: '日期',
          key: 'date',
          sortable: true
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '地址',
          key: 'address'
        }
      ],
      data: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      options: {
        defaultSort: {
          prop: 'date',
          // 在 columns 中设置 sortable 属性为 true ，即可实现以该列为基准的排序。
          // 可以通过 options 的 defaultSort 属性设置默认的排序列和排序顺序。
          order: 'descending'
        }
      }
    }
  }
}
</script>
