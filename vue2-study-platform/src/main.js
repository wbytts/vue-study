import Vue from 'vue';
import App from './App.vue';
import { pluginCore } from './plugins/index.js';
import { createRouter } from './router';
import { createStore } from './store';
import vuetify from './plugins/vuetify';
import '@/style/common.scss';

// 去除Vue使用生产环境包文件的提示
Vue.config.productionTip = false;

// 加载核心插件
Vue.use(pluginCore);

// 创建 VueRouter 对象
const router = createRouter();
// 创建 Vuex.Store 对象
const store = createStore();

// 创建Vue对象
let app = new Vue({
  router,
  store,
  render: h => h(App),
  vuetify,

  beforeCreate() {
    // 在Vue原型实例上挂载根Vue实例引用，用于全局事件
    Vue.prototype.$bus = this;
  },
}).$mount('#app');
