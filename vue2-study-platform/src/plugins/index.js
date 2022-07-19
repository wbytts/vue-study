import VueRouter from 'vue-router';
import Vuex from 'vuex';
import loadElementUi from './element-ui.js';
import loadVant from './vant.js';
import loadZjTable from './zj-table';
import loadVueContextMenu from './vue-contextmenu.js';
import loadAntDesignVue from './ant-design-vue.js';
import loadD2 from './d2';
import loadVueVxxx from './vue-v-xxx';
import loadVTooltip from './v-tooltip';
// import loadVuera from './vuera';
import loadLodash from './lodash';
import loadRamda from './ramda';
import loadEchartsAll from './echarts-all';
import loadEchartsUse from './echarts-use';
// import loadVueEcharts from './vue-echarts';
import loadMoment from './moment';
import loadDayjs from './dayjs';
import loadD3 from './d3';
import loadVueJsonViewer from './vue-json-viewer.js';
import loadCompositionApi from './composition-api.js';
import loadiView from './iview.js';

export const pluginCore = {
  install(Vue, options) {
    Vue.use(VueRouter); // 加载 VueRouter 插件
    Vue.use(Vuex); // 加载 Vuex 插件
    loadMoment(Vue);
    loadDayjs(Vue);
    loadRamda(Vue);
    loadLodash(Vue);
    loadElementUi(Vue); // 加载 Element UI 组件库
    loadAntDesignVue(Vue); // 加载 Ant Design Vue 组件库
    loadVant(Vue); // 加载 Vant 组件库
    loadiView(Vue); // 加载 iView 组件库
    loadZjTable(Vue); // 加载 zj-table
    loadVueContextMenu(Vue); // 加载 vue-context-menu
    loadD2(Vue); // 加载 d2 相关
    loadVueVxxx(Vue);
    loadVTooltip(Vue);
    // loadVuera(Vue);
    loadEchartsAll(Vue); // 加载 echarts，全量引入
    // loadEchartsUse(Vue); // 加载 echarts，按需引入
    // loadVueEcharts(Vue);
    loadD3(Vue);
    loadVueJsonViewer(Vue);
    loadCompositionApi(Vue);
  },
};
