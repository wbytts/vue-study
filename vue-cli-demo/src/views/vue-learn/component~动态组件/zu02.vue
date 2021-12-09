<template>
  <div>zu02</div>
</template>

<script>
export default {
    beforeCreate() {
    console.log('组件2', 'beforeCreate');
  },
  created() {
    console.log('组件2', 'created');
  },
  beforeMount() {
    console.log('组件2', 'beforeMount');
  },
  mounted() {
    console.log('组件2', 'mounted');
  },
  beforeUpdate() {
    console.log('组件2', 'beforeUpdate');
  },
  updated() {
    console.log('组件2', 'updated');
  },
  beforeDestroy() {
    console.log('组件2', 'beforeDestroy');
  },
  destroyed() {
    console.log('组件2', 'destroyed');
  },
}
</script>

<style>

</style>