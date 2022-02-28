<template>
  <div>
    <vue-pdf v-if="fileType === 'pdf'"></vue-pdf>
    <img v-if="fileType === 'img'" src="" alt="">
  </div>
</template>

<script>
import VuePdf from 'vue-pdf'

export default {
  components: { VuePdf },
  props: {
    fileType: {
      type: String,
      default: 'pdf'
    },
    fileSrc: {
      type: String,
      default: ''
    },
    page: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>

</style>
