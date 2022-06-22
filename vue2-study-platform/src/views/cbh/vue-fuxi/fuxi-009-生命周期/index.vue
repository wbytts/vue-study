<template>
  <div>
    <el-button type="primary" @click="comFlag = false">销毁子组件</el-button>
    <Com v-if="comFlag" />
  </div>
</template>

<script>
export const name = 'vue-fuxi# 009 组件生命周期';
import Com from './Com.vue';

export default {
  components: { Com },
  data() {
    return {
      comFlag: true,
    };
  },
  beforeCreate() {
    console.log('父组件# beforeCreate');
  },
  created() {
    console.log('父组件# created');
  },
  beforeMount() {
    console.log('父组件# beforeMount');
  },
  mounted() {
    console.log('父组件# mounted');
  },
  beforeUpdate() {
    console.log('父组件# beforeUpdate');
  },
  updated() {
    console.log('父组件# updated');
  },
  beforeDestroy() {
    console.log('父组件# beforeDestroy');
  },
  destroyed() {
    console.log('父组件# destroyed');
  },
};
</script>

<style>
</style>
