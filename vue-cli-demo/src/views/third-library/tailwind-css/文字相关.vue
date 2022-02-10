<template>
  <div>
    <div>
      <!--
        字体序列：
          font-sans(无衬线字体) ~~~ font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
          font-serif(衬线字体)  ~~~ font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
          font-mono(等宽字体)   ~~~ font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      -->
      <span class="font-mono">public static void main 你好啊</span>
    </div>
    <div>
      <!--
        文字大小：text-xs, text-sm, text-base, text-lg, text-xl, text-2xl, ..., text-9xl
      -->
      <span class="text-xl">你好</span>
    </div>
    <div>
      <!--
        字体平滑度：
          antialiased
          subpixel-antialiased
      -->
      <span>你好</span>
    </div>
    <div>
      <!--
        字体样式：
          italic
          not-italic
      -->
      <span class="italic">你好</span>
    </div>
    <div>
      <!--
        字体粗细：
          font-thin         100
          font-extralight   200
          font-light        300
          font-normal       400
          font-medium       500
          font-semibold     600
          font-bold         700
          font-extrabold    800
          font-black        900
      -->
      <div class="text-xl flex justify-between w-1/2">
        <span class="font-thin">你好</span>
        <span class="font-extralight">你好</span>
        <span class="font-light">你好</span>
        <span class="font-normal">你好</span>
        <span class="font-medium">你好</span>
        <span class="font-semibold">你好</span>
        <span class="font-bold">你好</span>
        <span class="font-extrabold">你好</span>
        <span class="font-black">你好</span>
      </div>
    </div>
    <div>
      <!--
        行高：
          leading-3 ~ leading-10    n * 0.25  rem
          leading-none       1
          leading-tight      1.25
          leading-snug       1.375
          leading-normal     1.5
          leading-relaxed    1.625
          leading-loose      2
       -->
    </div>
  </div>
</template>

<script>
export const name = 'TailwindCSS# 文字样式';

export default {};
</script>

<style>
</style>
