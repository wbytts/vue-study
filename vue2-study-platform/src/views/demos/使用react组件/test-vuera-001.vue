<template>
  <div>
    <div>
      <h1>I'm a Vue component</h1>
      <my-react-component :message="message" @onMyEvent="parentClickHandle" />
    </div>
  </div>
</template>

<script>
export const name = 'demos# vuera# test-001'

import MyReactComponent from '@/components/react/myReactComponent';
export default {
  components: {
    'my-react-component': MyReactComponent, // 引入React组件
  },
  data() {
    return {
      message: 'Hello from React!',
    };
  },
  methods: {
    parentClickHandle(data) {
      console.log(data);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
