<template>
  <div>
    <input v-model="msg"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: ''
    }
  },
  beforeCreate () {
    console.log('beforeCreate');
    this.$on('hook:created', () => console.log('hook:created'));
    this.$on('hook:beforeMount', () => console.log('hook:beforeMount'));
    this.$on('hook:beforeUpdate', () => console.log('hook:beforeUpdate'));
    this.$on('hook:beforeDestroy', () => console.log('hook:beforeDestroy'));
    this.$on('hook:mounted', () => console.log('hook:mounted'));
    this.$on('hook:updated', () => console.log('hook:updated'));
    this.$on('hook:destroyed', () => console.log('hook:destroyed'));
  }
}
</script>

<style>

</style>
