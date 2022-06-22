import { createApp, h } from 'vue';
import router from './router';
import store from './store';
import Element3 from 'element3';
import 'element3/lib/theme-chalk/index.css';
import App from './App.vue';

// .component('comp', { // 注册全局组件
//   render() {
//     return h('div', '啦啦啦');
//   },
// })

const app = createApp(App);
// app.use 也可以链式调用
app.use(store);
app.use(router);
app.use(Element3);
app.mount('#app');
