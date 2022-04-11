import { createApp, h } from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';

createApp(App)
  // .component('comp', { // 注册全局组件
  //   render() {
  //     return h('div', '啦啦啦');
  //   },
  // })
  .use(store)
  .use(router)
  .mount('#app');
