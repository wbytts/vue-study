<template>
  <div>
    标签之间可以嵌套 <br >
    在外面的叫做，父标签
    在里面的叫做，父标签的子标签。 <br>
    注意，省略父标签的子标签说法是不合理的

  <hr>
    <!-- 最终会变成一个DOM对象 -->
    <div></div>

    <!--
        最终会变成一个 Vue对象
        new Vue({....props...slots.})
    -->
    <demo-01 :a="show" v-on:我记不得了="1+1">
      hello

      <template v-slot:input>
        <div>
          <input type="text">
        </div>
      </template>

      <template v-slot:btns>
        <button @click="show">按钮</button>
      </template>
    </demo-01>

  </div>
</template>

<script>
export const name = '01-父子组件的概念 # 父子组件demo'

import Demo01 from './Demo01.vue'

export default {
  components: {Demo01},
  methods: {
    show(){
      console.log('lalala')
    },
    子元素记不得了() {
      console.log("我告诉你")
    }
  }
}
</script>

<style>

</style>
