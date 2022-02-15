<template>
  <div>
    <ul class="list">
      <li v-for="item in data" :key="item.id">
        <i class="el-icon-caret-bottom arrow" v-show="isFold[item.id]" @click="isFold[item.id]=false"></i>
        <i class="el-icon-caret-right arrow" v-show="!isFold[item.id]" @click="isFold[item.id]=true"></i>
        &nbsp;
        <span>{{item.title}}</span>
        <div v-show="isFold[item.id]" class="detail">{{item.detail}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
    },
  },
  data() {
    return {
      list: [],
      isFold: {},
    };
  },
  created() {
    this.data.forEach(item => {
      this.isFold = { ...this.isFold, [item.id]: false };
    });
  },
};
</script>

<style scoped>
.list .arrow {
  cursor: pointer;
}

.detail {
  padding-left: 20px;
}
</style>

