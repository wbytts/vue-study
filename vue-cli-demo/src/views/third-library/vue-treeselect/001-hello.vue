<!-- Vue SFC -->
<template>
  <div id="app">
    <Treeselect v-model="value" :multiple="true" :options="options" />
  </div>
</template>

<script>
export const name = 'vue-treeselect# 001-hello';
// import the component
import Treeselect from '@riophae/vue-treeselect'; // 直接引入使用，不是插件，不需要 Vue.use
// import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css';

export default {
  // register the component
  components: { Treeselect },
  data() {
    return {
      // define the default value
      value: null,
      // define options
      options: [
        {
          id: 'a',
          label: 'a',
          children: [
            {
              id: 'aa',
              label: 'aa',
            },
            {
              id: 'ab',
              label: 'ab',
            },
          ],
        },
        {
          id: 'b',
          label: 'b',
        },
        {
          id: 'c',
          label: 'c',
        },
      ],
    };
  },
};
</script>
