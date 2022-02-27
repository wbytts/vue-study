<script setup>
import { ref } from 'vue'

// 功能A
let a = ref(0);
const addA = () => a.value++
const minusA = () => a.value--

// 功能B
let b = ref(0);
const addB = () => b.value++
const minusB = () => b.value--
</script>

<template>
  <div>
    <div>{{ a }}</div>
    <button @click="addA">增加</button>
    <button @click="minusA">减少</button>
  </div>
  <hr />
  <div>
    <div>{{ b }}</div>
    <button @click="addB">增加</button>
    <button @click="minusB">减少</button>
  </div>
</template>


