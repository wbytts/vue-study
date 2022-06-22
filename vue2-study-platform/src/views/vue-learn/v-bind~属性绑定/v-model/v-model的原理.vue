<template>
  <div>
    <input type="text" v-model="a" />
    <!-- 等价于 -->
    <input type="text" v-bind:value="a" @input="handleUpdate" />

    <!-- 不同的元素监听的事件不一样 -->
    <!-- 如果是自定义的组件，v-model监听好像是update属性 -->
    <!--
      text和textarea 使用的是 value属性 和 input事件
      checkbox和radio 使用的是 checked属性 和 change事件
      select 使用的是 value属性 和 change事件
     -->
    <hr />
    <div>{{a}}</div>
  </div>
</template>

<script>
export const name = 'v-model的原理 #base';

export default {
  components: {},
  data() {
    return {
      a: 0,
    };
  },
  methods: {
    handleUpdate(e) {
      console.log(e);
      this.a = e.target.value;
    },
  },
};
</script>
createTimeRange
<style>
</style>
