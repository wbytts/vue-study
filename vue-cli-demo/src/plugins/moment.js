// Moment
// 单独引入 moment语言包并配置
import moment from 'moment'
import 'moment/locale/zh-cn';

export default function (Vue) {
  moment.locale('zh-cn');
}
