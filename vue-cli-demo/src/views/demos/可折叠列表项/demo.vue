<template>
  <div>
    <FoldItemList :data="list" />
  </div>
</template>

<script>
export const name = 'demo# 列表项可以折叠展开-demo01';
import FoldItemList from './fold-item-list.vue';
import { nanoid } from 'nanoid';

export default {
  components: { FoldItemList },
  data() {
    return {
      list: [
        { id: nanoid(), title: '1111111', detail: 'detaildetaildetaildetaildetaildetail' },
        { id: nanoid(), title: '2222222', detail: 'detaildetaildetaildetaildetaildetail' },
        { id: nanoid(), title: '3333333', detail: 'detaildetaildetaildetaildetaildetail' },
        { id: nanoid(), title: '4444444', detail: 'detaildetaildetaildetaildetaildetail' },
        { id: nanoid(), title: '5555555', detail: 'detaildetaildetaildetaildetaildetail' },
      ],
    };
  },
};
</script>

<style>
</style>


