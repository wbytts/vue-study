<template>
  <div>
    <h1>{{name1 | toBig }}</h1>
    <h1>{{name2 | toBig}}</h1>
    <h1>{{name3 | toBig}}</h1>
  </div>
</template>

<script>
export const name = 'vue-fuxi# 020 filter 过滤器';

export default {
  data() {
    return {
      name1: 'Zhang San',
      name2: null,
      name3: 'Wang Wu',
    };
  },
  methods: {
    // toBig(str) {
    //   if (str && typeof str === 'string') {
    //     return str.toUpperCase();
    //   } else {
    //     return '---';
    //   }
    // },
  },
  filters: {
    toBig(str) {
      if (str && typeof str === 'string') {
        return str.toUpperCase();
      } else {
        return '---';
      }
    },
  },
};
</script>

<style>
</style>
