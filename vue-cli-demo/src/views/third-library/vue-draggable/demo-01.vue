<template>
  <div>
    <vue-draggable>
      <div class="box"></div>
    </vue-draggable>
  </div>
</template>

<script>
export const name = 'vue-draggable# demo-01'
import draggable from 'vuedraggable';

export default {
  components: { 'vue-draggable': draggable },
};
</script>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
}
</style>
