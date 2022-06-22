<template>
  <div>
    <h1>x: {{x}}, y: {{y}}</h1>
  </div>
</template>

<script setup>
import useMouse from '../utils/ues/mouse';

const { x, y, color } = useMouse();

</script>

<style scoped>
/* 在样式里绑定值 */
h1 {
  color: v-bind(color)
}
</style>




