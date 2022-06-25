<template>
  <div>
    <MyList :data="listData">
      <template slot-scope="{id}">
        <div style="display: inline-block;">
          <el-button size="mini" @click="handleClick(id)">删除</el-button>
        </div>
      </template>
    </MyList>
  </div>
</template>

<script>
export const name = 'vue-fuxi# 018 插槽作用域';
import MyList from './MyList.vue';

export default {
  components: { MyList },
  data() {
    return {
      listData: [
        {
          id: 1,
          date: '2016-05-02',
          name: '王小虎11111',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          id: 2,
          date: '2016-05-04',
          name: '王小虎22222',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          id: 3,
          date: '2016-05-01',
          name: '王小虎333333',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          id: 4,
          date: '2016-05-03',
          name: '王小虎44444',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
    };
  },
  methods: {
    handleClick(id) {
      this.listData = this.listData.filter(item => item.id != id);
    },
  },
};
</script>

<style>
</style>
