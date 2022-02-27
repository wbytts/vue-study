<template>
  <h1>{{ msg }}</h1>
  <p>{{ data.counter }} --- x2= {{ data.doubleCounter }}</p>
  <button @click="add">增加</button>
  <button @click="desc">减少</button>
</template>

<script>
import { reactive, computed, onMounted, onUnmounted, ref } from 'vue';

export default {
  props: {
    msg: String
  },
  setup() {
    const { data, add, desc } = useCounter();
    return { data, add, desc };
  },
};

function useCounter() {
  const data = reactive({
    counter: 1,
    doubleCounter: computed(() => data.counter * 2)
  });

  const add = () => {
    data.counter++;
  }

  const desc = () => {
    data.counter--;
  }

  let timer;
  // 当挂载完成的时候
  onMounted(() => {
    timer = setInterval(() => {
      data.counter++
    }, 200)
  });

  onUnmounted(() => {
    clearInterval(timer)
  })

  return { data, add, desc };
}

</script>