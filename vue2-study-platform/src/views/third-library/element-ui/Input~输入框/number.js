import Vue from 'vue';
import _ from 'lodash';
import { window } from 'd3';
import { Message } from 'element-ui';

Vue.directive('number', {
  inserted: function (el, binding, vnode) {
    const input = el.querySelector('.el-input__inner');
    const context = vnode.context;
    const length = binding.value['length']
    console.log(binding, vnode);

    input.oninput = function (e) {
      let val = e.target.value;
      let newVal = val.replace(/[^\d\.]/g, '');
      input.value = newVal;
      console.log('输入');
    };

    input.onblur = function (e) {
      let val = e.target.value;
      input.value = val.replace(/[^\d\.]/g, '');
      console.log('失去焦点');
    };

    input.onpaste = function (e) {
      let clipboardData = event.clipboardData || window.clipboardData;
      let text = clipboardData.getData('text/plain')
      console.log('粘贴的内容', text)
      if(/^\d+$/.test(text)) {
        vnode.componentInstance.$emit('input', text)
        Message({type: 'success', message: '数据粘贴成功'})
      } else {
        Message({type: 'warning', message: `粘贴的数据不合法,必须是数字,并且不能超过${length}个字符`})
      }
      return false;
    }
  },
})
