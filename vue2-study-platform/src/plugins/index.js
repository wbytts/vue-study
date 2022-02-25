import VueRouter from 'vue-router';
import Vuex from 'vuex';
import loadElementUi from './element-ui.js';
import loadVant from './vant.js';
import loadZjTable from './zj-table';
import loadVueContextMenu from './vue-contextmenu.js';
import loadAntDesignVue from './ant-design-vue.js';
import loadD2 from './d2';
import * as R from 'ramda/dist/ramda.js';
import _ from 'lodash';
import moment from 'moment';
import 'moment/locale/zh-cn';
import dayjs from 'dayjs';
import loadVueVxxx from './vue-v-xxx';
import loadVTooltip from './v-tooltip';

export const pluginCore = {
  install(Vue, options) {
    Vue.use(VueRouter); // 加载 VueRouter 插件
    Vue.use(Vuex); // 加载 Vuex 插件
    loadElementUi(Vue); // 加载 Element UI
    loadAntDesignVue(Vue); // 加载 Ant Design Vue
    loadVant(Vue); // 加载 Vant
    loadZjTable(Vue); // 加载 zj-table
    loadVueContextMenu(Vue); // 加载 vue-context-menu
    loadD2(Vue); // 加载 d2 相关
    loadVueVxxx(Vue);
    loadVTooltip(Vue);


    // 配置 moment.js 语言
    moment.locale('zh-cn');

    // 挂载全局变量
    window.R = R;
    window._ = _;
    window.moment = moment;
    window.dayjs = dayjs;
  },
};
