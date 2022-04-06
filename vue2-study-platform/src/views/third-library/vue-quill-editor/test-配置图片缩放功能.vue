
<template>
  <div class="components-container">
    <div>
      <quill-editor
        ref="myQuillEditor"
        v-model="content"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @ready="onEditorReady($event)"
      />
    </div>
    <div class="editor-content" v-html="content" />
  </div>
</template>

<script>
export const name = 'vue-quill-editor# test-001';
import Quill from 'quill';
import { quillEditor } from 'vue-quill-editor';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

import { ImageDrop } from 'quill-image-drop-module'; // 图片拖动组件引用
import ImageResize from 'quill-image-resize-module'; // 图片缩放组件引用
Quill.register('modules/imageDrop', ImageDrop); // 注册图片拖动插件
Quill.register('modules/imageResize', ImageResize); // 注册图片缩放插件

/*
注：运行时出现 imports.... 的错误的话，添加打包配置
    config.plugins.push(
      new webpack.ProvidePlugin({
        'window.Quill': 'quill/dist/quill.js',
        Quill: 'quill/dist/quill.js',
      }),
    );
*/

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], // 加粗，斜体，下划线，删除线
  ['blockquote', 'code-block'], //引用，代码块
  [{ header: 1 }, { header: 2 }], // 几级标题
  [{ list: 'ordered' }, { list: 'bullet' }], // 有序列表，无序列表
  [{ script: 'sub' }, { script: 'super' }], // 下角标，上角标
  [{ indent: '-1' }, { indent: '+1' }], // 缩进
  [{ direction: 'rtl' }], // 文字输入方向
  [{ size: ['small', false, 'large', 'huge'] }], // 字体大小
  [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
  [{ color: [] }, { background: [] }], // 颜色选择
  [{ font: [] }], // 字体
  [{ align: [] }], // 居中
  ['clean'], // 清除样式,
  ['link', 'image'], // 上传图片、上传视频
];

export default {
  components: {
    quillEditor,
  },
  data() {
    return {
      // 富文本编辑器默认内容
      content: '',
      // 富文本编辑器配置
      editorOption: {
        placeholder: '请在这里输入',
        theme: 'snow', //主题 snow：有工具栏的；bubble：只有文本域的
        history: {
          delay: 1000,
          maxStack: 50,
          userOnly: false,
        },
        modules: {
          imageDrop: true, //图片拖拽
          imageResize: {
            //放大缩小
            displayStyles: {
              backgroundColor: 'black',
              border: 'none',
              color: 'white',
            },
            modules: ['Resize', 'DisplaySize', 'Toolbar'],
          },
          toolbar: {
            container: toolbarOptions, //工具栏
            handlers: {},
          },
        },
      },
    };
  },
  methods: {
    // 准备富文本编辑器
    onEditorReady(quill) {},
    //失去焦点事件
    onEditorBlur(quill) {
      console.log('editor blur!', quill);
    },
    //获得焦点事件
    onEditorFocus(quill) {
      console.log('editor focus!', quill);
    },
    //内容改变事件
    onEditorChange({ quill, html, text }) {
      console.log('editor change!', quill, html, text);
      this.content = html;
    },
  },
};
</script>
<style lang='scss'>
.ql-container {
  // 设置默认字号
  font-size: 16px;
  height: 500px;
}
</style>
