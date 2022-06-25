<template>
  <div class="foot">
    <div v-for="btn in btns" :key="btn.id" class="foot-item">
      <div class="foot-item-icon">
        <i :class="btn.icon"></i>
      </div>
      <div class="foot-item-text">{{btn.label}}</div>
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
    }
    .foot-item-text {
      text-align: center;
      height: 30px;
    }
  }
}
</style>
