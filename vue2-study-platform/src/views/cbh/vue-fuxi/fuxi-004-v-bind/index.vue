<template>
  <div>
    <input type="text" v-model="h1Title" style="border: 1px solid red;" />
    <h1 v-bind:title="h1Title">你好啊</h1>
    <h1 :title="h1Title">你好啊</h1>

    <!-- v-bind 绑定 class 属性 -->
    <el-checkbox v-model="redFlag" label="红色"></el-checkbox>
    <h1
      v-bind:class="{
      [h1ClassRed]: redFlag,
      [h1BorderGreen]: true
    }"
    >
      你好啊
    </h1>

    <hr />
    <el-input v-model="x"></el-input>
    <Com v-bind:value="x" />
  </div>
</template>

<script>
export const name = 'vue-fuxi# 004 v-bind';
import Com from './Com.vue';

export default {
  components: { Com },
  data() {
    return {
      x: '',
      h1Title: 'Hello',
      h1ClassRed: 'red',
      h1BorderGreen: 'border-green',
      redFlag: true,
    };
  },
};
</script>

<style scoped>
.red {
  color: red;
}
.border-green {
  border: 1px solid green;
}
</style>
