<template>
  <div id="app">
    <h3 id="title">{{$store.state.title}}</h3>
    <div id="main">
      <component :is="componentMap[currentComponent] ? componentMap[currentComponent].componentObj : ''"></component>
    </div>

    <button id="coms_btn" @click="showComs = !showComs">组件列表</button>

    <transition name="bounce">
      <div id="coms" v-show="showComs">
        <h3>views组件列表</h3>
        <input type="text" v-model="filterText" id="com-search" />
        <ul>
          <li v-for="com in Object.keys(filteredComponentMap)" :key="com.id" :class="{'listActive': isActiveItem(com)}" @click="changeCurrentComponent(com)">
            {{componentMap[com].name ? componentMap[com].name : com}}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
// 递归引入 views 文件夹下的所有vue文件
const vueFiles = require.context('@/views/', true, /.vue$/)

// views下组件映射
let componentMap = {};

// 遍历组件列表，生成组件映射
vueFiles.keys().forEach(path => {
  var com = vueFiles(path).default // 获取 export default 的内容
  var name = vueFiles(path).name // 获取导出的名字
  if(!name) return;
  // 处理组件路径，生成组件标识
  let key = path
    .replaceAll('./', '')
    .replaceAll('.vue', '')
    .replaceAll('.', '')
    .replaceAll('/', '-')
    .replaceAll('~', '-')
    .replaceAll('$', '_')
  componentMap[key] = {
    componentObj: com,
    name: name
  }
})

export default {
  components: {
    ...componentMap,
  },
  data() {
    return {
      componentMap: componentMap,
      currentComponent: localStorage.getItem('currentComponent') || '',
      showComs: localStorage.getItem('showComs') || false,
      filterText: localStorage.getItem('filterText') || ''
    }
  },
  watch: {
    filterText(newVal, oldVal) {
      localStorage.setItem('filterText', newVal)
    }
  },
  methods: {
    changeCurrentComponent(com) {
      console.clear()
      this.currentComponent = com
      localStorage.setItem('currentComponent', this.currentComponent)
    },
    isActiveItem(key) {
      return this.currentComponent === key
    }
  },
  computed: {
    filteredComponentMap() {
      let result = {};
      Object.keys(this.componentMap).forEach(key => {
        let name = this.componentMap[key].name
        if(name.toLowerCase().includes(this.filterText.toLowerCase())) {
          result[key] = this.componentMap[key]
        }
      })
      return result;
    }
  }
};
</script>

<style lang="scss">
#title {
  text-align: center;
}
#main {
  position: relative;
  padding: 10px;
  border: 1px solid red;
  border-radius: 5px;
}
#coms_btn {
  position: fixed;
  right: 15px;
  top: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  outline: none;
  border: none;
  background-color: skyblue;
  color: green;
  z-index: 999;
  transition: all .5s;

  &:hover {
    transform: scale(1.2);
    background-color: red;
    color: #FFF;
  }

}
#com-search {
  width: 80%;
  height: 30px;
  font-size: 20px;
  color: red;
  padding-left: 10px;
  margin-left: 20px;
  outline: none;
  border: 1px solid green;
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

.listActive {
  background-color: greenyellow;
}


.bounce-enter-active {
  animation: bounce-in 1s;
}
.bounce-leave-active {
  animation: bounce-in 1s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(2) ;  // rotate(360deg)
  }
  100% {
    transform: scale(1) ; // rotate(-360deg)
  }
}
</style>
