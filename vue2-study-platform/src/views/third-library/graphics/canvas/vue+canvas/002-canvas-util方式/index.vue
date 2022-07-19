<template>
  <div>
    <canvas class="canvas" ref="canvas" width="800" height="600" />
  </div>
</template>

<script>
export const name = 'TL#graphics#canvasvue+canvas# 001-hello';

export default {
  data() {
    return {
      ctx: null,
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
.canvas {
  border: 1px solid red;
}
</style>
