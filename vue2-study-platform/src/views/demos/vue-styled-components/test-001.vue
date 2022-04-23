<template>
  <div>
    <flex-center-div class="box">
      <div>你好啊</div>
    </flex-center-div>
  </div>
</template>

<script>
export const name = 'vue-styled-components# test-001';
import { FlexCenterDiv } from '@/components/styled/flex.js';

export default {
  components: { FlexCenterDiv },
};
</script>

<style lang="scss" scoped>
.box {
  width: 200px;
  height: 200px;
  border: 1px solid red;
}
</style>
