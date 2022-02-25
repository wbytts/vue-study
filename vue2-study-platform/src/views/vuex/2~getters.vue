<template>
  <div>
    <div>{{$store.getters.xA(3)}}</div>
  </div>
</template>

<script>
export const name = 'Vuex# 2~getters';

import {mapGetters} from 'vuex';

export default {
 computed: {
   ...mapGetters(['a1', 'a2', 'xA'])
 }
}
</script>

<style>

</style>