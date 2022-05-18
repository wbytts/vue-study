<template>
  <div>
    <nuxt-link to="/login">登录页</nuxt-link>
    <nuxt-link to="/404">404</nuxt-link>
    <nuxt-link to="/manage">管理页面</nuxt-link>
    <hr>
    <nuxt-link to="/element">ElementUI例子</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      name: '',
      msg: ''
    }
  },
  computed: {
    username() {
      return this.$store.state.username
    }
  },
  methods: {
    handleChange() {
      this.$store.commit('setName', this.name);
    }
  },
}
</script>






