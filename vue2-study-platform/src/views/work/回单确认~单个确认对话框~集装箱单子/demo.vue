<template>
  <div class="main">
    <div class="card">
      <div class="block">
        <div>发货信息</div>
        <div>
          <div>
            <span>发货吨位</span>
            <span>xx吨</span>
          </div>
          <div>
            <div>实际发货</div>
            <div>
              <div>xxx英尺高柜 箱号：xxx xx箱</div>
              <div>xxx英尺高柜 箱号：xxx xx箱</div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
    <div class="card">
      <div class="block">
        <div>收货信息</div>
        <div>
          <div>
            <span>收货吨位</span>
            <span>xx吨</span>
          </div>
          <div>
            <div>实际收货</div>
            <div>
              <div>xxx英尺高柜 箱号：xxx xx箱</div>
              <div>xxx英尺高柜 箱号：xxx xx箱</div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
    <div class="card">
      <div class="block">
        <div>结算信息</div>
      </div>
      <div class="block">
        <div>20英尺普柜 2箱</div>
        <div>
          <div>
            <span>箱号1</span>
            <span>
              <input type="text" />
            </span>
          </div>
          <div>
            <span>箱号1</span>
            <span>
              <input type="text" />
            </span>
          </div>
          <div>
            <span>结算金额（含税）</span>
            <span>
              <input type="text" />
            </span>
          </div>
          <div>
            <span>结算金额（不含税）</span>
            <span>
              <input type="text" />
            </span>
          </div>
        </div>
      </div>
      <div class="block">
        <div>加扣款</div>
      </div>
      <div class="block">
        <div>加扣款后</div>
      </div>
    </div>
  </div>
</template>

<script>
export const name = 'work# 回单确认~单个确认对话框~集装箱单子';

export default {};
</script>

<style lang="scss" scoped>
.main {
  width: 600px;
  .card {
    background-color: #f5f5f5;
  }
}

input {
  border: 1px solid #ccc;
}
</style>
