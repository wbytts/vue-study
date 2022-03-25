<template>
  <div>
    <!-- 默认插座，即 default插座 -->
    <slot>默认插座的默认内容，即不插插座时候的内容</slot>

    <!-- 有名字的插座 -->
    <slot name="good">有名字的插座的默认内容</slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
