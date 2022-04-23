import ECharts from 'vue-echarts';

// 手动引入 ECharts 各模块来减小打包体积
import { use } from 'echarts/core';
// import { CanvasRenderer } from 'echarts/renderers';
// import { BarChart } from 'echarts/charts';
// import { GridComponent, TooltipComponent } from 'echarts/components';
// use([CanvasRenderer, BarChart, GridComponent, TooltipComponent]);

// 全量引入
import 'echarts';

export default function (Vue) {
  // 全局注册组件（也可以使用局部注册）
  Vue.component('v-echart', ECharts);
}
