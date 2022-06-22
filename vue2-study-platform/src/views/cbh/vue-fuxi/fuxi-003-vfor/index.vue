<template>
  <div>
    <!-- <h1 v-for="i in 100" :key="i">列表渲染</h1> -->
    <h1 v-for="book in booksWithNoRed" :key="book.id">{{book.name}}</h1>
    <!-- <h1 v-for="(v, k) in obj">{{k}} --- {{v}}</h1> -->
  </div>
</template>

<script>
export const name = 'vue-fuxi# 003-列表渲染';

// 虚拟DOM树

// 向第二个数字后面加了一个1

// 旧： 1 1 2 1 1
// 新： 1 1 1 2 1 1
// 3

export default {
  data() {
    return {
      obj: {
        name: '张三',
        age: 18,
        hobbies: ['看书', '听音乐'],
      },
      books: [
        { id: 1, name: '《红宝书》' },
        { id: 2, name: '《黄宝书》' },
        { id: 3, name: '《绿宝书》' },
      ],
    };
  },
  computed: {
    booksWithNoRed() {
      return this.books.filter(book => book.name !== '《红宝书》');
    },
  },
};
</script>

<style>
</style>
