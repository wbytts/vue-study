<template>
  <div>
    <button @click="visible=true">打开弹窗</button>

    <common-dialog :visible.sync="visible"></common-dialog>
  </div>
</template>

<script>
export const name = 'ElementUI# Dialog封装'
import CommonDialog from './CommonDialog.vue'

export default {
  components: {CommonDialog},
  data() {
    return {
      visible: false,
    }
  }
}
</script>

<style>

</style>
