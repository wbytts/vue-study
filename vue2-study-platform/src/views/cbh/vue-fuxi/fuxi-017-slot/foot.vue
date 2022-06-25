<template>
  <div class="foot">
    <div class="foot-item">
      <div class="foot-item-icon">
        <i class="el-icon-chat-line-round"></i>
      </div>
      <div class="foot-item-text">消息</div>
    </div>
    <div class="foot-item">
      <slot :color="'red'"></slot>
    </div>
    <div class="foot-item">
      <div class="foot-item-icon">
        <i class="el-icon-star-off"></i>
      </div>
      <div class="foot-item-text">空间</div>
    </div>
    <div class="foot-item">
      <div class="foot-item-icon">
        <i class="el-icon-setting"></i>
      </div>
      <div class="foot-item-text">设置</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    btns: {
      type: Array,
    },
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style lang="scss" scoped>
.foot {
  width: 500px;
  height: 90px;
  border: 1px solid red;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;

  .foot-item {
    width: 80px;
    height: 70px;
    // border: 1px solid green;
    // display: inline-block;

    .foot-item-icon {
      text-align: center;
      height: 40px;
      font-size: 24px;
      color: green;
    }
    .foot-item-text {
      text-align: center;
      height: 30px;
      color: skyblue;
    }
  }
}
</style>
