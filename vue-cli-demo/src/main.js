import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 单独引入 moment语言包并配置
import moment from 'moment'
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

/*
https://github.com/snowzijun/vue-element-table
  vue-elementui-table.common.js
  vue-elementui-table.umd.js
*/
import ZjTable from 'vue-elementui-table/lib/vue-elementui-table.common.js'
import 'vue-elementui-table/lib/vue-elementui-table.css'
Vue.use(ZjTable)



Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    // 在Vue原型实例上挂载根Vue实例引用，用于全局事件
    Vue.prototype.$bus = this;
  }
}).$mount('#app')
