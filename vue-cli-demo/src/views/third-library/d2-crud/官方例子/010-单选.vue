<template>
  <div>
    <d2-crud
      :columns="columns"
      :data="data"
      :options="options"
      index-row
      @current-change="handleCurrentChange"/>
  </div>
</template>

<script>
export const name = 'd2-crud# 官方例子# 010-单选';

/*
D2 Crud 组件提供了单选的支持，只需要在 options 对象中将 highlightCurrentRow 属性设为 true 即可实现单选。
之后由 current-change 事件来管理选中时触发的事件，它会传入 currentRow 和 oldCurrentRow。
如果需要显示索引，需要配置 index-row 属性。
*/

export default {
  data () {
    return {
      columns: [
        {
          title: '日期',
          key: 'date'
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
        highlightCurrentRow: true
      }
    }
  },
  methods: {
    handleCurrentChange (currentRow, oldCurrentRow) {
      console.log(currentRow)
      console.log(oldCurrentRow)
    }
  }
}
</script>
