import Vue from 'vue';
import Vuex from 'vuex';
import createStore from './store.js';
import App from './App.vue';


Vue.use(Vuex);
const store = createStore();

new Vue({
    store,
    render: h => h(App)
}).$mount('#root');