<template>
  <div>
    <p>基于 modern-normalize , Preflight 是一套针对 Tailwind 项目的基础样式，旨在消除跨浏览器的不一致性，并使您的工作更轻松地符合设计系统的约束。</p>
    <p>默认的外边距已移除</p>
    <p>标题无样式</p>
    <p>列表无样式</p>
    <p>图片是块级元素</p>
    <p>边框样式已被全局重置</p>
    <p>按钮默认有轮廓</p>
    <hr />
    <button class="bg-blue-800 text-white p-5 border-4 border-green-400 border-dotted rounded-full">按钮</button>
  </div>
</template>

<script>
export const name = 'TailwindCSS# preflight ~ 一套武断的针对 Tailwind 项目预设的基础样式';

export default {};
</script>

<style lang="scss" scoped>
</style>
