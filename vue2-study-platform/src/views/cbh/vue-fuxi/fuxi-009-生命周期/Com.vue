<template>
  <div>
    <input type="text" v-model="x" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: '',
    };
  },
  methods: {
    fun() {},
  },
  beforeCreate() {
    console.log('com# beforeCreate');
  },
  created() {
    console.log('com# created');
    this.fun();
  },
  beforeMount() {
    console.log('com# beforeMount');
  },
  mounted() {
    console.log('com# mounted');
  },
  beforeUpdate() {
    console.log('com# beforeUpdate');
  },
  updated() {
    console.log('com# updated');
  },
  beforeDestroy() {
    console.log('com# beforeDestroy');
  },
  destroyed() {
    console.log('com# destroyed');
  },
  // activated() {},
  // deactivated() {},
};
</script>

<style scoped>
input {
  border: 1px solid red;
}
</style>
