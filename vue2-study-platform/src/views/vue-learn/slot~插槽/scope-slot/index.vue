<template>
  <div>
    <zu-01>
      <!--
        v-slot 的参数，指定了插槽的作用域对象
        之前是使用 slot-scope 属性指定的，2.6.0起已废弃（仍支持，但不会出现在vue3中）
      -->
      <!-- slotScope收集了绑定在对应插槽上的属性，可以起别的名字 -->
      <!-- 可以使用解构语法 -->
      <template v-slot:title="slotScope">
        <h3>{{slotScope.info}}</h3>
      </template>
    </zu-01>
  </div>
</template>

<script>
export const name = '插槽# 作用域插槽';
import Zu01 from './zu-01.vue';

export default {
  components: { Zu01 },
  data() {
    return {};
  },
};
</script>

<style>
</style>
