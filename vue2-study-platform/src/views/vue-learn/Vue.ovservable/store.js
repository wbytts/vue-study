import Vue from 'vue'

// 通过Vue.observable创建一个可响应的对象
export const store = Vue.observable({
  msg: 'hello world'
})

// 定义 mutations, 修改属性
export const mutations = {
  setMsg(msg) {
    store.msg = msg
  },
}