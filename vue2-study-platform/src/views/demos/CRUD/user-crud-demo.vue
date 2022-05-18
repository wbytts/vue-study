<template>
  <div>
    <div>{{users}}</div>
  </div>
</template>

<script>
import { getUserList } from '@/api/json/user.js';

export const name = 'demo# CRUD-用户增删改查demo';

export default {
  data() {
    return {
      users: [],
    };
  },
  async mounted() {
    let { data } = await getUserList();
    this.users = data;
  },
};
</script>

<style>
</style>

