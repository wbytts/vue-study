export default {
  data() {
    return {
      canvasCtxMap: {},
    };
  },
  methods: {
    byCanvasInitCtx(selector, ctxName) {
      let ctx = document.querySelector(selector).getContext('2d');
      this.canvasCtxMap[ctxName] = ctx;
      return ctx;
    },
  },
  mounted() {},
};
