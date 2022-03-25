<template>
  <div>
    <zu-01>
      123
      <!--
        slot参数形式：（2.6.0起已废弃，仍支持，但不会出现在vue3中）
          <template slot="title">
      -->
      <!--
          v-slot:xxx 形式
          不带参数的 v-slot 被认为是默认插槽

          具名插槽缩写： #xxx
          默认插槽缩写： #default （注：只写一个 # 可能会产生警告）
      -->
      <template v-slot:title>456</template>
    </zu-01>
  </div>
</template>

<script>
export const name = '具名插槽 named slot';
import Zu01 from './zu-01.vue';

export default {
  components: { Zu01 },
};
</script>

<style>
</style>
