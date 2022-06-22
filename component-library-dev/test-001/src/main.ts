import { createApp } from 'vue';
import App from './App.vue';
import ByContainer from './components/container';

const app = createApp(App);

app.use(ByContainer);

app.mount('#app');
