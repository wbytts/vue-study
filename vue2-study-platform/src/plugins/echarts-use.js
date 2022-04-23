// 按需引入
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart } from 'echarts/charts';
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

/*
需要注意的是为了保证打包的体积是最小的，ECharts 按需引入的时候不再提供任何渲染器，
所以需要选择引入 CanvasRenderer 或者 SVGRenderer 作为渲染器。
这样的好处是假如你只需要使用 svg 渲染模式，打包的结果中就不会再包含无需使用的 CanvasRenderer 模块。
*/

export default function (Vue) {
  Vue.prototype.$echarts = echarts;
}
