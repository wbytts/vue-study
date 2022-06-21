<template>
  <div>
    <h1>hello world</h1>
    <ul>
      <li v-for="book in bookList" :key="book.id">{{book.name}}</li>
    </ul>
  </div>
</template>

<script>
export const name = '#cbh v-for test'
export default {
  data() {
    return {
      bookList: [
        {id: 1, name: 'JavaScript高级程序设计'},
        {id: 2, name: 'CSS世界'},
        {id: 3, name: 'CSS选择器世界'},
        {id: 4, name: 'CSS新世界'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
