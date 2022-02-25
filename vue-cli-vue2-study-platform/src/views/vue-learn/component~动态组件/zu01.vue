<template>
  <div>zu01</div>
</template>

<script>
export default {
  beforeCreate() {
    console.log('组件1', 'beforeCreate');
  },
  created() {
    console.log('组件1', 'created');
  },
  beforeMount() {
    console.log('组件1', 'beforeMount');
  },
  mounted() {
    console.log('组件1', 'mounted');
  },
  beforeUpdate() {
    console.log('组件1', 'beforeUpdate');
  },
  updated() {
    console.log('组件1', 'updated');
  },
  beforeDestroy() {
    console.log('组件1', 'beforeDestroy');
  },
  destroyed() {
    console.log('组件1', 'destroyed');
  },
};
</script>

<style>
</style>