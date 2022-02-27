import { createApp, h } from 'vue';
import App from './App.vue';

createApp(App)
  .component('comp', {
    render() {
      return h('div', '啦啦啦');
    },
  })
  .mount('#app');
