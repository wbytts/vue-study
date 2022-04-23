<template>
  <div>
    <div>
      <h1>I'm a Vue component</h1>
      <react-wrapper :component="reactCom" :message="message" />
    </div>
  </div>
</template>

<script>
export const name = 'demos# vuera# test-002';

import { ReactWrapper } from 'vuera'; // 引入vuera库
import MyReactComponent from '@/components/react/myReactComponent';
export default {
  components: {
    'react-wrapper': ReactWrapper,
  },
  data() {
    return {
      message: 'Hello from React!',
      reactCom: MyReactComponent,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>
