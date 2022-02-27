<template>
  <h3 @click="$emit('click')">自定义事件</h3>
</template>

<script>
export default {
  /*
    Vue3中，组件发送的自定义事件需要定义在 emits 选项中
    * 如果不设置的话，原生事件会触发两次，比如 click
    * 更好的指示组件工作方式
    * 对象形式事件，事件参数校验等
  */
  emits: ['click']
}
</script>

<style>
</style>