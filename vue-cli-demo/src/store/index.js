import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';
import createPersistedState from 'vuex-persistedstate';

/*
!Vuex的文件结构可以随便更改，只要遵守下面几个规则：
  应用层级的状态应该集中到单个 store 对象中。
  提交 mutation 是更改状态的唯一方法，并且这个过程是同步的
  异步逻辑都应该封装到 action 里面。
*/

const dataState = createPersistedState({
  paths: ['log', 'index'],
});

export const createStore = () => {
  return new Vuex.Store({
    plugins: [dataState],
    modules,
    state: {
      a: 3,
    },
    // !getters：state的派生状态
    // Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。
    // 就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
    getters: {
      // Getter 接受 state 作为其第一个参数
      // Getter 会暴露为 store.getters 对象
      // 注意，getter 在通过属性访问时是作为 Vue 的响应式系统的一部分缓存其中的。
      a1: state => state.a,
      // Getter 也可以接受其他 getter 作为第二个参数
      a2: (state, getters) => state.a + getters.a1,

      // 通过方法访问
      // 可以通过让 getter 返回一个函数，来实现给 getter 传参。在你对 store 里的数组进行查询时非常有用。
      // 注意，getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果。
      xA: state => n => n * state.a,
    },
    // !更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
    // Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
    // 这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数
    // 不能直接调用一个 mutation handler。这个选项更像是事件注册：“当触发一个类型为 increment 的 mutation 时，调用此函数。”
    // !要唤醒一个 mutation handler，需要以相应的 type 调用 store.commit 方法
    // store.commit('xxxxx')
    mutations: {
      // 向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）
      // 在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读 (不是必须的)
      changeA(state, n) {
        state.a = n;
      },
      // 提交 mutation 的另一种方式是直接使用包含 type 属性的对象，type决定具体的mutation
      // store.commit({type: 'increment',amount: 10})
      // 当使用对象风格的提交方式，整个对象都作为载荷传给 mutation 函数，因此 handler 可以保持不变

      /*
        !Mutation 需遵守 Vue 的响应规则:
          既然 Vuex 的 store 中的状态是响应式的，那么当我们变更状态时，监视状态的 Vue 组件也会自动更新。
          这也意味着 Vuex 中的 mutation 也需要与使用 Vue 一样遵守一些注意事项：
          最好提前在你的 store 中初始化好所有所需属性。
            * 当需要在对象上添加新属性时，你应该
            * 使用 Vue.set(obj, 'newProp', 123)
            * 以新对象替换老对象。
      */

      // 使用常量替代 Mutation 事件类型
      // 用不用常量取决于你——在需要多人协作的大型项目中，这会很有帮助。但如果你不喜欢，你完全可以不这样做。

      // !mutation 必须是同步函数
      // 在 Vuex 中，mutation 都是同步事务

      // 可以在组件中使用 this.$store.commit('xxx') 提交 mutation
      // 或者使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）
    },
    /*
      !Action类似于Mutation，不同的是：
        !1. action提交的是mutation，而不是直接改变state
        !2. action可以包含任意异步的操作
    */
    actions: {
      // Action函数接受一个与 store 实例具有相同方法和属性的 context 对象
      // Action函数同样接收类似mutation的 payload载荷
      // !Action 通过 store.dispatch 方法触发 dispatch('action', payload) / dispatch({type: 'action', ...})
      // Action支持通过直接传一个对象并指定type的形式触发
      /*
        一个 store.dispatch 在不同模块中可以触发多个 action 函数。
        在这种情况下，只有当所有触发函数完成后，返回的 Promise 才会执行。
      */
      action1(context) {},
    },
    /*
      !模块
      Vuex 允许我们将 store 分割成模块（module）。
      每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割

      对于模块内部的 mutation 和 getter，接收的第一个参数是模块的局部状态对象。
      同样，对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState
      对于模块内部的 getter，根节点状态会作为第三个参数暴露出来

      !命名空间：
        默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的——这样使得多个模块能够对同一 mutation 或 action 作出响应。
        如果希望你的模块具有更高的封装度和复用性，你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块。
        当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名。
        启用了命名空间的 getter 和 action 会收到局部化的 getter，dispatch 和 commit。
            换言之，你在使用模块内容（module assets）时不需要在同一模块内额外添加空间名前缀。更改 namespaced 属性后不需要修改模块内的代码。
        如果你希望使用全局 state 和 getter，rootState 和 rootGetters 会作为第三和第四参数传入 getter，也会通过 context 对象的属性传入 action。
        若需要在全局命名空间内分发 action 或提交 mutation，将 { root: true } 作为第三参数传给 dispatch 或 commit 即可。
        若需要在带命名空间的模块注册全局 action，你可添加 root: true，并将这个 action 的定义放在函数 handler 中。
        可以将模块的空间名称字符串作为第一个参数传递给mapState, mapGetters, mapActions 和 mapMutations等函数，这样所有绑定都会自动将该模块作为上下文。
        可以通过使用 createNamespacedHelpers 创建基于某个命名空间辅助函数。它返回一个对象，对象里有新的绑定在给定命名空间值上的组件绑定辅助函数

      !模块动态注册：
        在 store 创建之后，你可以使用 store.registerModule 方法注册模块
        可以使用 store.unregisterModule(moduleName) 来动态卸载模块。注意，你不能使用此方法卸载静态模块（即创建 store 时声明的模块）
        可以通过 store.hasModule(moduleName) 方法检查该模块是否已经被注册到 store

      !保留state：
        可以通过 preserveState 选项将其归档：store.registerModule('a', module, { preserveState: true })。
        当你设置 preserveState: true 时，该模块会被注册，action、mutation 和 getter 会被添加到 store 中，但是 state 不会。
        这里假设 store 的 state 已经包含了这个 module 的 state 并且你不希望将其覆写。

      !模块重用：
        有时我们可能需要创建一个模块的多个实例，例如：
          * 创建多个 store，他们公用同一个模块 (例如当 runInNewContext 选项是 false 或 'once' 时，为了在服务端渲染中避免有状态的单例 (opens new window)
          * 在一个 store 中多次注册同一个模块
        如果我们使用一个纯对象来声明模块的状态，那么这个状态对象会通过引用被共享，导致状态对象被修改时 store 或模块间数据互相污染的问题。
        实际上这和 Vue 组件内的 data 是同样的问题。因此解决办法也是相同的——使用一个函数来声明模块状态（仅 2.3.0+ 支持）
    */
  });
};
