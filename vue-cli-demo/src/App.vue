<template>
  <div id="app">
    <h3 id="title">{{$store.state.title}}</h3>
    <div id="main">
      <component :is="componentMap[currentComponent].componentObj"></component>
    </div>

    <button id="coms_btn" @click="showComs = !showComs">组件列表</button>
    <div id="coms" v-show="showComs">
      <h3>views组件列表</h3>
      <ul>
        <li v-for="com in Object.keys(componentMap)" :key="com.id" @click="changeCurrentComponent(com)">
          {{componentMap[com].name ? componentMap[com].name : com}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 引入 views 文件夹下的所有vue文件
const vueFiles = require.context('@/views/', true, /.vue$/)

// views下组件映射
let componentMap = {};

// 遍历组件列表，生成组件映射
vueFiles.keys().forEach(path => {
  console.log(path);
  var com = vueFiles(path).default // 获取 export default 的内容
  var name = vueFiles(path).name // 获取导出的名字
  // 处理组件路径，生成组件标识
  let key = path.replaceAll('./', '').replaceAll('.vue', '').replaceAll('.', '').replaceAll('/', '-')
  componentMap[key] = {
    componentObj: com,
    name: name
  }
})

console.log(componentMap)

export default {
  components: {
    ...componentMap,
  },
  data() {
    return {
      componentMap: componentMap,
      currentComponent: localStorage.getItem('currentComponent') || '',
      showComs: false
    }
  },
  methods: {
    changeCurrentComponent(com) {
      this.currentComponent = com
      localStorage.setItem('currentComponent', this.currentComponent)
    }
  }
};
</script>

<style lang="scss">
#title {
  text-align: center;
}
#main {
  padding: 10px;
  border: 1px solid red;
  border-radius: 5px;
}
#coms_btn {
  position: fixed;
  right: 10px;
  top: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  outline: none;
  border: none;
  background-color: skyblue;
  color: green;
  z-index: 999;
}
#coms {
  position: fixed;
  width: 400px;
  top: 10px;
  right: 10px;
  border: 1px solid #CCC;
  background-color: #EEE;
  h3 {
    text-align: center;
  }
  ul {
    height: 500px;
    overflow-y: auto;
    position: relative;
    left: -15px;
    li {
      padding: 4px;
      list-style: none;
      border: 1px solid skyblue;
      border-radius: 5px;
      margin-bottom: 2px;
      &:hover {
        color: blue;
        background-color: yellow;
        cursor: pointer;
      }
    }
  }
}
</style>
