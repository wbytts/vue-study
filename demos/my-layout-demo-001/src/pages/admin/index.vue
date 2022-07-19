<template>
  <div class="admin-page">
    <div class="top"></div>
    <div class="bottom">
      <div class="left"></div>
      <div class="right">
        <div class="main">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$top-height: 50px; // 顶部高度
$left-width: 200px; // 侧边宽度

.admin-page {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  .top {
    height: $top-height;
    background-color: skyblue;
  }
  .bottom {
    height: 100%;
    display: flex;
    .left {
      width: $left-width;
      background-color: pink;
    }
    .right {
      background-color: #ccc;
      width: 100%;
      .main {
        padding: 10px;
      }
    }
  }
}
</style>