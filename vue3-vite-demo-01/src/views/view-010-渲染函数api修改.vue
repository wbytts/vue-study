<template>
  <render-test @one-click="handleClick"/>
</template>

<script>
/*
渲染函数变的简单好用了
修改的主要有：
  * 不再传入h函数，需要我们手动导入
  * 拍平props结构
  * scopedSlots删掉了，统一到 slots
*/
import { h } from 'vue'
export default {
  components: {
    RenderTest: {
      render() {
        return h('div', [
          h('div', {
            onClick: () => this.$emit('one-click')
          }, '你好'),
          h('div', {}, '吗'),
        ])
      }
    }
  },
  methods: {
    handleClick() {
      console.log('被点击啦啊');
    }
  }
}
</script>

<style>
</style>