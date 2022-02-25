<template>
  <div>
    <zi-01 @add="zi01Add"></zi-01>
    <zi-02 ref="zi02"></zi-02>
  </div>
</template>

<script>
export const name = '03-多个子组件-公共父组件调用子组件方法实现多个非父子组件之间的信息传递 # 父子组件demo'


export default {
  components: {
    'zi-01': () => import('./zi-01.vue'),
    'zi-02': () => import('./zi-02.vue'),
  },
  data() {
    return {

    }
  },
  methods: {
    zi01Add(v) {
      console.log('父组件', 'zi-01触发了add事件', v)
      this.$refs.zi02.add(v);
    }
  }
}
</script>

<style>

</style>
