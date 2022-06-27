// ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

export default function (Vue) {
  Vue.use(ElementUI, { zIndex: 500 });

  // Element 更改组件属性默认值
  // element Dialog全局设置
  // 默认按下ESC键为不关闭
  ElementUI.Dialog.props.closeOnPressEscape.default = false;
  // 点击遮罩层关闭Dialog弹窗
  ElementUI.Dialog.props.closeOnClickModal.default = false;
}
