<template>
  <div>
    <canvas class="canvas" ref="canvas" width="800" height="600" />
  </div>
</template>

<script>
export const name = 'TL#graphics#canvasvue+canvas# 001-hello';
import CanvasByMixin from './canvas-by-mixin.js';

export default {
  mixins: [CanvasByMixin],
  data() {
    return {
      ctx: null
    };
  },
  methods: {},
  mounted() {
    this.ctx = this.byCanvasInitCtx('.canvas');
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(20, 20, 400, 200);
  },
};
</script>

<style lang="scss" scoped>
.canvas {
  border: 1px solid red;
}
</style>
