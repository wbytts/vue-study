import { defineComponent, h } from 'vue';
// imp 回车，模块名，tab，

export default defineComponent({
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
  setup(props, { slots }) {
    // return () =>
    //   h(
    //     'h' + props.level, // 标签名
    //     {},
    //     slots.default() // 子节点
    //   );
    const tag = 'h' + props.level;
    return () => <tag>{slots.default()}</tag>
  },
});
