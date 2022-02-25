<template>
  <div>
    <div class="container">
      <div class="box" v-drag></div>
    </div>
  </div>
</template>

<script>
export const name = 'DEMOS# 拖拽# 1';
import '@/directives/drag.js'

export default {

};
</script>

<style scoped>
.container {
  position: relative;
}

.box {
  position: relative;
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 50%;
}
</style>

