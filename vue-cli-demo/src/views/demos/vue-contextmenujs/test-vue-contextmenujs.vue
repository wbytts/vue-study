<template>
  <div>
    <div id="app" style="width:100vw;height:100vh" @contextmenu.prevent="onContextmenu"></div>
  </div>
</template>

<script>
export const name = '右键菜单# vue-contextmenujs 组件使用';
import Vue from 'vue';
import Contextmenu from 'vue-contextmenujs';
Vue.use(Contextmenu);

export default {
  methods: {
    onContextmenu(event) {
      this.$contextmenu({
        items: [
          {
            label: '返回(B)',
            onClick: () => {
              this.message = '返回(B)';
              console.log('返回(B)');
            },
          },
          { label: '前进(F)', disabled: true },
          { label: '重新加载(R)', divided: true, icon: 'el-icon-refresh' },
          { label: '另存为(A)...' },
          { label: '打印(P)...', icon: 'el-icon-printer' },
          { label: '投射(C)...', divided: true },
          {
            label: '使用网页翻译(T)',
            divided: true,
            minWidth: 0,
            children: [{ label: '翻译成简体中文' }, { label: '翻译成繁体中文' }],
          },
          {
            label: '截取网页(R)',
            minWidth: 0,
            children: [
              {
                label: '截取可视化区域',
                onClick: () => {
                  this.message = '截取可视化区域';
                  console.log('截取可视化区域');
                },
              },
              { label: '截取全屏' },
            ],
          },
          { label: '查看网页源代码(V)', icon: 'el-icon-view' },
          { label: '检查(N)' },
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
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12) !important;
}
.material-theme .menu_item {
  color: #000000de !important;
}
.material-theme .menu_item__available:hover,
.material-theme .menu_item_expand {
  background: rgba(0, 0, 0, 0.04) !important;
}
</style>
