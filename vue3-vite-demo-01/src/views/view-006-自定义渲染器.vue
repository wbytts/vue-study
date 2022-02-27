<template></template>

<script>
/*
vue3中支持自定义渲染器：
这个API可以用来自定义渲染逻辑
*/

import { createRenderer } from 'vue';

let options = {
  // 处理元素创建逻辑
  createElement() { },
  // 处理元素插入逻辑
  insert() { },
  remove: child => { },
  createText: text => { },
  createComment: text => { },
  setText: (node, text) => { },
  setElementText: (el, text) => { },
  parentNode: node => { },
  nextSibling: node => { },
  querySelector: selector => { },
  setScopeId(el, id) { },
  cloneNode(el) { },
  insertStaticContent(content, parent, anchor, isSVG) { },
}

const draw = () => { }

const renderer = createRenderer({
  // 处理元素创建逻辑
  createElement(tag, isSVG, is) {
    return { tag }
  },
  // 处理元素插入逻辑
  insert(child, parent, anchor) {
    // 如果是子元素，不是真实DOM，只需要将数据保存到前面的许你对象
    // 如果是真实的DOM元素，需要绘制
    child.parent = parent
    if (!parent.childs) {
      parent.childs = [child]
    } else {
      parent.childs.push(child)
    }

    if (parent.nodeType == 1) {
      draw(child)
      if (child.onClick) {

      }
    }
  },
  patchProp(el, key, prevValue, nextValue) {
    el[key] = nextValue;
  },
  remove: child => { },
  createText: text => { },
  createComment: text => { },
  setText: (node, text) => { },
  setElementText: (el, text) => { },
  parentNode: node => { },
  nextSibling: node => { },
  querySelector: selector => { },
  setScopeId(el, id) { },
  cloneNode(el) { },
  insertStaticContent(content, parent, anchor, isSVG) { },
});
// const canvasApp = renderer.createApp(CanvasApp);

export default {

}
</script>

<style>
</style>



