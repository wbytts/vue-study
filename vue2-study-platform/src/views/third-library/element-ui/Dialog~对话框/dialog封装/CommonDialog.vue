<template>
  <div>
    <el-dialog :visible="visible" :title="title" @close="$emit('update:visible', false)"></el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
    },
    title: {
      type: String,
    },
  },
};
</script>

<style>
</style>
