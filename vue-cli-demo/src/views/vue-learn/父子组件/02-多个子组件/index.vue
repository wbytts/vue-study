<template>
  <div>
    <zi-01 @add="zi01Add"></zi-01>
    <zi-02 :arr="zi02Data"></zi-02>
  </div>
</template>

<script>
export const name = '02-多个子组件-通过父组件传递数据 # 父子组件demo'


export default {
  components: {
    'zi-01': () => import('./zi-01.vue'),
    'zi-02': () => import('./zi-02.vue'),
  },
  data() {
    return {
      zi02Data: []
    }
  },
  methods: {
    zi01Add(v) {
      console.log('父组件', 'zi-01触发了add事件', v)
      this.zi02Data.push(v)
    }
  }
}
</script>

<style>

</style>
