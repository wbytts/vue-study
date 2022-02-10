<template>
  <div>
    <el-dialog :visible.sync="visible">hello</el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean
    }
  }
}
</script>

<style>

</style>
