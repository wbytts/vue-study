<template>
  <div>
    <button @click="click">按钮</button>
    <div v-mloading="showLoading" style="background-color: #CCC">
      hello <br />
      hello <br />
      hello <br />
      hello <br />
      hello <br />
    </div>
  </div>
</template>
<script>
export const name = 'test-loading-3';
import './loading-directive.js';

export default {
  data() {
    return {
      showLoading: false,
    }
  },
  methods: {
    click() {
      this.showLoading = true
      const t = setTimeout(() => {
        this.showLoading = false
        clearTimeout(t);
      }, 3000);
    }
  }
};
</script>