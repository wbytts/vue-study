<template>
  <div ref="echartsRef" class="chart"></div>
</template>

<script>
export const name = 'echarts# test-01';

export default {
  mounted() {
    let myChart = this.$echarts.init(this.$refs.echartsRef);
    const option = {
      tooltip: {
        trigger: 'item',
      },
      color: ['#ffd666', '#ffa39e', '#409EFF'],
      series: [
        {
          name: '前端课程',
          type: 'pie',
          radius: '70%',
          data: [
            { value: 43340, name: '学习Angular' },
            { value: 7003, name: '学习React' },
            { value: 4314, name: '学习Vue' },
          ],
        },
      ],
    };
    myChart.setOption(option);
  },
};
</script>

<style lang="scss" scoped>
.chart {
  width: 600px;
  height: 400px;
  border: 1px solid red;
}
</style>


