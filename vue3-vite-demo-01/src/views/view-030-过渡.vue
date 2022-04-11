<template>
  <div>
    <div id="box" :style="{width: boxWidth + 'px'}"></div>
    <button @click="handleClick">click</button>
  </div>
</template>

<script setup>
let boxWidth = $ref(100);
let handleClick = () => (boxWidth += 100);
</script>

<style lang="scss" scoped>
#box {
  height: 100px;
  background-color: green;
  transition: width 0.5s linear;
}
</style>



