// ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

export default function (Vue) {
  Vue.use(ElementUI, { zIndex: 500 });

  // 更改组件属性默认值
  // 修改 el-dialog 默认点击遮罩为不关闭
  ElementUI.Dialog.props.closeOnPressEscape.default = false;
  // element全局点击遮罩层关闭Dialog弹窗
  ElementUI.Dialog.props.closeOnClickModal.default = false;
}







