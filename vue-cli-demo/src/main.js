import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    // 在Vue原型实例上挂载根Vue实例引用，用于全局事件
    Vue.prototype.$bus = this;
  }
}).$mount('#app')
