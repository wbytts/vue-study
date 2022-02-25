<template>
  <div>
    <button @click="showLoading">按钮</button>
  </div>
</template>
<script>
export const name = 'test-loading-2';
import Loading from './loading.js';

export default {
  methods: {
    showLoading() {
      const loading = Loading({ text: '正在加载。。。' });
      // 三秒钟后关闭
      setTimeout(() => {
        loading.close();
      }, 3000);
    },
  },
};
</script>