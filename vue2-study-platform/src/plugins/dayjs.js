import dayjs from 'dayjs';

export default function (Vue) {
  Vue.prototype.$dayjs = dayjs;
  window.dayjs = dayjs;
}
