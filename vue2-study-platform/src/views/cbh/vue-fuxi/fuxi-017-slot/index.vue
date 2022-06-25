<template>
  <div>
    <Foot>
      <div slot="default" slot-scope="scope" style="background-color: #ccc;">
        <div class="foot-item-icon">
          <i class="el-icon-user" style="color: green;"></i>
        </div>
        <div class="foot-item-text" :style="{color: scope.color}">联系人</div>
      </div>

      <template v-slot:asd>你好</template>
    </Foot>
    <!-- <Foot :btns="footBtns1" /> -->
    <!-- <Foot />
    <Foot />
    <Foot /> -->
  </div>
</template>

<script>
export const name = 'vue-fuxi# 017 slot 插槽';
import Foot from './foot.vue';

export default {
  components: { Foot },

  data() {
    return {
      // footBtns: [
      //   { id: 1, icon: 'el-icon-chat-line-round', label: '消息' },
      //   { id: 2, icon: 'el-icon-user', label: '联系人' },
      //   { id: 3, icon: 'el-icon-star-off', label: '空间' },
      //   { id: 4, icon: 'el-icon-setting', label: '设置' },
      // ],
      // footBtns1: [
      //   { id: 1, icon: 'el-icon-chat-line-round', label: '首页' },
      //   { id: 2, icon: 'el-icon-user', label: '电商' },
      //   { id: 3, icon: 'el-icon-star-off', label: '消息' },
      //   { id: 4, icon: 'el-icon-setting', label: '购物车' },
      //   { id: 5, icon: 'el-icon-setting', label: '我的' },
      // ],
    };
  },
};
</script>

<style>
</style>
