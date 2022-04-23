import * as d3 from "d3";

export default function(Vue) {
  window.d3 = d3;
  Vue.prototype.$d3 = d3;
}

