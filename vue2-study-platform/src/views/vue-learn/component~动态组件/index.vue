<template>
  <div>
    <button @click="com='zu-01'">组件1</button>
    <button @click="com='zu-02'">组件2</button>

    <!-- <component :is="com"></component> -->

    <!--
      keep-alive：可以缓存内部的组件状态
      失活的组件将会被缓存！
      注意这个 <keep-alive> 要求被切换到的组件都有自己的名字，不论是通过组件的 name 选项还是局部/全局注册。
     -->
    <keep-alive>

      <component :is="存储组件对象的变量"></component>

    </keep-alive>

    <!--
      无 keep-alive 时，component 切换is（组件1 -> 组件2）
        组件2 beforeCreate
        组件2 created
        组件2 beforeMount
        组件1 beforeDestroy
        组件1 destroyed
        组件2 mounted

      添加了 keep-alive 之后（组件1不会销毁了~）
        组件2 beforeCreate
        组件2 created
        组件2 beforeMount
        组件2 mounted
     -->
  </div>
</template>

<script>
export const name = '动态组件'
import Zu01 from './zu01.vue'
import Zu02 from './zu02.vue'

export default {
  components: {Zu01, Zu02},
  data() {
    return {
      com: 'zu-01'
    }
  }
}
</script>

<style>


</style>
