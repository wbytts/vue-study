<template>
  <div>
    <button @click="page--">上一页</button>
    <span>|</span>
    <button @click="page++">下一页</button>
    <span>|</span>
    <span>当前页：{{page}}</span>
    <vue-pdf src="https://img.zczy56.com/FPZF-202201261354580062871j8GJcJAW.pdf" :page="1" class="pdf-preview"></vue-pdf>
    <vue-pdf src="https://img.zczy56.com/FPZF-202201261354580062871j8GJcJAW.pdf" :page="2" class="pdf-preview"></vue-pdf>
    <vue-pdf src="https://img.zczy56.com/FPZF-202201261354580062871j8GJcJAW.pdf" :page="3" class="pdf-preview"></vue-pdf>
    <vue-pdf src="https://img.zczy56.com/FPZF-202201261354580062871j8GJcJAW.pdf" :page="4" class="pdf-preview"></vue-pdf>
    <vue-pdf src="https://img.zczy56.com/FPZF-202201261354580062871j8GJcJAW.pdf" :page="5" class="pdf-preview"></vue-pdf>
    <vue-pdf src="https://img.zczy56.com/FPZF-202201261354580062871j8GJcJAW.pdf" :page="6" class="pdf-preview"></vue-pdf>
    <vue-pdf src="https://img.zczy56.com/FPZF-202201261354580062871j8GJcJAW.pdf" :page="7" class="pdf-preview"></vue-pdf>
    <vue-pdf src="https://img.zczy56.com/FPZF-202201261354580062871j8GJcJAW.pdf" :page="8" class="pdf-preview"></vue-pdf>
  </div>
</template>

<script>
export const name = 'vue-pdf# hello';
import VuePdf from 'vue-pdf';

export default {
  components: {
    VuePdf,
  },
  data() {
    return {
      page: 1,
    };
  },
};
</script>

<style scoped>
.pdf-preview {
  width: 150px;
  border: 1px solid #ccc;
  margin-bottom: 4px;
}
</style>
