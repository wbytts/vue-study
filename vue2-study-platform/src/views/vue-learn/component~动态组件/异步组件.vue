<template>
  <div>
    <!-- 
      https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%BC%82%E6%AD%A5%E7%BB%84%E4%BB%B6
    -->
    <async-example />
    <async-example-global />
  </div>
</template>

<script>
export const name = '异步组件';
/*
  Vue 允许你以一个工厂函数的方式定义你的组件，这个工厂函数会异步解析你的组件定义。
  Vue 只有在这个组件需要被渲染的时候才会触发该工厂函数，且会把结果缓存起来供未来重渲染。
*/

import Vue from 'vue';
Vue.component('async-example-global', function (resolve, reject) {
  setTimeout(function () {
    // 向 `resolve` 回调传递组件定义
    console.log('组件加载');
    resolve({
      // template: '<div>I am global async!</div>'
      render: h => <div>I am global async!</div>
    });
  }, 5000)
});

export default {
  components: {
    // import() 是webpack的语法，返回一个 Promise
    'zu-01': () => import('./zu01.vue'),
    'zu-02': () => import('./zu02.vue'),
    'async-example': function (resolve, reject) {
      setTimeout(function () {
        // 向 `resolve` 回调传递组件定义
        console.log('组件加载');
        resolve({
          // template: '<div>I am async!</div>', // ? 用template好像会有警告？
          render(h) {
            return (
              <div>I am async!</div>
            )
          }
        });
      }, 3000);
    },
  },
};

/*
异步组件工厂函数也可以返回一个如下格式的对象：
  const AsyncComponent = () => ({
    //* 需要加载的组件 (应该是一个 `Promise` 对象)
    component: import('./MyComponent.vue'),
    //* 异步组件加载时使用的组件
    loading: LoadingComponent,
    //* 加载失败时使用的组件
    error: ErrorComponent,
    //* 展示加载时组件的延时时间。默认值是 200 (毫秒)
    delay: 200,
    //* 如果提供了超时时间且组件加载也超时了，
    //* 则使用加载失败时使用的组件。默认值是：`Infinity`
    timeout: 3000
  })
*/



</script>

<style>
</style>