<template>
  <div class="component-code">
    <!--其他一堆代码-->
    <custom-loading :visible="visible" text="加载中" />
  </div>
</template>
<script>
export const name = 'test-loading-1'
import CustomLoading from './loading-1.vue'

export default {
  components: {CustomLoading},
  data() {
    return {
      visible: false
    }
  }
}
</script>