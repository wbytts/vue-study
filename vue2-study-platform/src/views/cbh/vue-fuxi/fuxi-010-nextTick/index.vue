<template>
  <div>
    <h1 id="hhh">x = {{x}}</h1>
  </div>
</template>

<script>
export const name = 'vue-fuxi# 010 nextTick';

export default {
  data() {
    return {
      x: 999,
    };
  },
  beforeCreate() {
    let h1 = document.getElementById('hhh');
    // console.log('h1里面的内容', h1.innerHTML);
  },
  created() {
    this.x = 666;
    let h1 = document.getElementById('hhh');
    // console.log('h1里面的内容', h1.innerHTML);
  },
  beforeMount() {
    let h1 = document.getElementById('hhh');
    // console.log('h1里面的内容', h1.innerHTML);
  },
  mounted() {
    this.x = 777;

    // let h1 = document.getElementById('hhh');
    // console.log('h1里面的内容', h1.innerHTML);

    this.$nextTick(() => {
      let h1 = document.getElementById('hhh');
      console.log('$nextTick ---> h1里面的内容', h1.innerHTML);
    });
  },
  updated() {
    let h1 = document.getElementById('hhh');
    console.log('updated ---> h1里面的内容', h1.innerHTML);
  },
};
</script>

<style>
</style>

