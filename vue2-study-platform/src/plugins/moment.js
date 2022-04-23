import moment from 'moment';
import 'moment/locale/zh-cn';

export default function (Vue) {
  // 配置 moment.js 语言
  moment.locale('zh-cn');
  Vue.prototype.$moment = moment;
  window.moment = moment;
}
