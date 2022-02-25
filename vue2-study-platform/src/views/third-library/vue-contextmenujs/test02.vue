<template>
  <div>
    <div id="app" style="width:100vw;height:100vh" @contextmenu.prevent="onContextmenu"></div>
  </div>
</template>

<script>
export const name = '右键菜单# vue-contextmenujs 组件使用2';
import Vue from 'vue';
import Contextmenu from 'vue-contextmenujs';
Vue.use(Contextmenu);

export default {
  methods: {
    onContextmenu(event) {
      this.$contextmenu({
        items: [
          { label: '选项1' },
          { label: '选项2' },
          {
            label: '选项3',
            children: [{ label: '子菜单1' }, { label: '子菜单2' }],
          },
          { label: '选项4' },
          { label: '选项5' },
          { label: '选项6' },
          { label: '选项7' },
        ],
        event,
        //x: event.clientX,
        //y: event.clientY,
        customClass: 'custom-class',
        zIndex: 3,
        minWidth: 230,
      });
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
/* custom */
.custom-class .menu_item__available:hover,
.custom-class .menu_item_expand {
  background: #ffecf2 !important;
  color: #ff4050 !important;
}

/* antd */
.antd-theme.menu {
  border-radius: 2px !important;
}
.antd-theme .menu_item {
  color: #000000d9 !important;
}
.antd-theme .menu_item__available:hover {
  background: #f5f5f5 !important;
}
.antd-theme .menu_item_expand {
  font-weight: 600 !important;
  background-color: #e6f7ff !important;
}

/* material */
.material-theme.menu {
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14),
    0px 3px 14px 2px rgba(0, 0, 0, 0.12) !important;
}
.material-theme .menu_item {
  color: #000000de !important;
}
.material-theme .menu_item__available:hover,
.material-theme .menu_item_expand {
  background: rgba(0, 0, 0, 0.04) !important;
}
</style>
