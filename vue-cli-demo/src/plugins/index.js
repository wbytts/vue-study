import VueRouter from 'vue-router'
import Vuex from 'vuex'
import loadElementUi from './element-ui.js';
import loadVant from './vant.js';
import loadMoment from './moment';
import loadZjTable from './zj-table';
import loadVueContextMenu from './vue-contextmenu.js';

export const pluginCore = {
  install(Vue, options) {
    Vue.use(VueRouter); // 加载 VueRouter 插件
    Vue.use(Vuex); // 加载 Vuex 插件
    loadElementUi(Vue); // 加载 Element UI
    loadVant(Vue); // 加载 Vant
    loadMoment(Vue); // 加载 Moment 配置
    loadZjTable(Vue); // 加载 zj-table
    loadVueContextMenu(Vue);
  }
};
