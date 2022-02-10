<template>
  <div>
    <d2-crud
      :columns="columns"
      :data="data"
      :loading="loading"
      :pagination="pagination"
      @pagination-current-change="paginationCurrentChange"
    />
  </div>
</template>

<script>
export const name = 'd2-crud# 官方例子# 018-分页';

// 在 D2 Crud 组件中传入 pagination 对象，即可开启分页。

export default {
  data() {
    return {
      columns: [
        {
          title: '卡密',
          key: 'key',
          width: 320,
        },
        {
          title: '面值',
          key: 'value',
        },
        {
          title: '管理员',
          key: 'admin',
        },
        {
          title: '创建时间',
          key: 'dateTimeCreat',
        },
        {
          title: '使用时间',
          key: 'dateTimeUse',
        },
      ],
      data: [],
      loading: false,
      pagination: {
        currentPage: 1,
        pageSize: 5,
        total: 0,
      },
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    paginationCurrentChange(currentPage) {
      this.pagination.currentPage = currentPage;
      this.fetchData();
    },
    fetchData() {
      this.loading = true;
      DEMO_BUSINESS_TABLE_1_LIST({
        ...this.pagination,
      })
        .then(res => {
          this.data = res.list;
          this.pagination.total = res.page.total;
          this.loading = false;
        })
        .catch(err => {
          console.log('err', err);
          this.loading = false;
        });
    },
  },
};
</script>
