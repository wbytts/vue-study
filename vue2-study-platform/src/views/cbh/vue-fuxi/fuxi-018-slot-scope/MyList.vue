<template>
  <div>
    <ul>
      <li v-for="item in data" :key="item.id">
        <i class="el-icon-caret-right"></i>
        <span>{{item.name}}</span>
        <slot :id="item.id"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
    },
  },
};
</script>

<style>
</style>
