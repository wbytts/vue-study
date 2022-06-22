<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <ul v-if="todos.length">
      <li v-for="todo in todos" :key="todo.title">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{done:todo.done}">{{todo.title}}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选
      <input type="checkbox" v-model="allDone" />
      <span>{{active}} / {{all}}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

let title = $ref('');
let todos = $ref([{ title: '学习', done: false }]);

let addTodo = () => {
  todos.push({ title: title, done: false });
  title = '';
};
let clear = () => (todos = todos.filter(v => !v.done));

let active = computed(() => todos.filter(v => !v.done).length);
let all = computed(() => todos.length);

let allDone = computed({
  get: () => active === 0,
  set: val => todos.forEach(todo => (todo.done = val)),
});

</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding-left: 0;
}
.done {
  color: gray;
  text-decoration: line-through;
}
</style>

