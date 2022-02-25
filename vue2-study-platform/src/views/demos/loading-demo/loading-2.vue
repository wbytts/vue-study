<template>
  <transition name="custom-loading-fade">
    <!--loading蒙版-->
    <div v-show="visible" class="custom-loading-mask">
      <!--loading中间的图标-->
      <div class="custom-loading-spinner">
        <i class="custom-spinner-icon"></i>
        <!--loading上面显示的文字-->
        <p class="custom-loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      text: '加载中',
      visible: false,
    };
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .custom-loading-mask {
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>



