import Vue from 'vue'
import Vuex from 'vuex'


export const createStore = () => {
  return new Vuex.Store({
    state: {
      title: '演示区域'
    },
    mutations: {
      SET_TITLE() { }
    },
    actions: {
    },
    modules: {
    }
  });
}
