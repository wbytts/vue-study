<template>
  <section class="by-container" :class="{'is-vertical' : isVertical}"></section>
</template>

<script lang="ts">
export default {
  name: 'ByContainer'
}
</script>

<script lang="ts" setup>
import { useSlots, computed, VNode, Component } from 'vue';

interface Props {
  direction?: string;
}

const props = defineProps<Props>()
const slots = useSlots()

const isVertical = computed(() => {
  if(slots && slots.default) {
    return slots.default().some((vn: VNode) => {
      const tag = (vn.type as Component).name
      return tag === 'ByHeader' || tag === 'ByFooter'
    })
  } else {
    return props.direction === 'vertical'
  }
})

</script>

<style lang="scss" scoped>
@import '../styles/mixin.scss';

// 生成 .by-container
@include b(container) {
  dispaly: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
  // 生成 .by-container.is-vertical
  @include when(vertical) {
    flex-direction: column;
  }
}
</style>