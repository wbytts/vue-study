<template>
  <div>
    <!--
        current-row-key 当前行的 key，只写属性	String,Number
        highlight-current-row 高亮当前行，boolean，默认为false

        表格相关方法：
          setCurrentRow(row)   用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。

        事件：
          current-change(currentRow, oldCurrentRow)	当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性
    -->
    <el-table
      ref="ttt"
      :data="tableData"
      size="mini"
      style="width: 100%"
      :row-key="row => row.id"
      strip
      border
      highlight-current-row
      @current-change="currentRow => $refs.ttt.currentRowKey = currentRow.id"
    >
      <el-table-column label="id" prop="id" width="60"></el-table-column>
      <el-table-column label="text" prop="text"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export const name = 'ElementUI# Table# 单选，当前行';

export default {
  data() {
    return {
      tableData: [
        { id: 1, text: '111111111' },
        { id: 2, text: '222222222' },
        { id: 3, text: '333333333' },
        { id: 4, text: '444444444' },
        { id: 5, text: '555555555' },
        { id: 6, text: '666666666' },
      ],
      timer: null,
    };
  },
  methods: {},
  mounted() {
    this.timer = setInterval(() => {
      let firstRow = this.tableData.filter(row => row.id == 1)[0];
      console.log(firstRow);
      let currentRowKey = this.$refs.ttt.currentRowKey;
      if (currentRowKey) {
        let row = this.tableData.filter(row => row.id == currentRowKey)[0];
        this.$refs.ttt.setCurrentRow(row);
        if(currentRowKey == this.tableData[this.tableData.length - 1].id) {
          this.$refs.ttt.setCurrentRow(firstRow);
        }
      } else {
        this.$refs.ttt.setCurrentRow(firstRow);
      }
    }, 2000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>
