<template>
  <div>
    <zi-01></zi-01>
    <zi-02></zi-02>
  </div>
</template>

<script>
export const name = '06-多个子组件 # 父子组件demo'


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
  }
}
</script>

<style>

</style>
