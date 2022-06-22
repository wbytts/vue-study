<template>
  <div class="deficit-rise-config">
    <el-row :gutter="20">
      <el-col :span="5" :offset="4">
        <div>
          <span style="font-weight: bold;">亏吨区间</span>&nbsp;
          <el-select size="mini" style="width: 100px;">
            <el-option label="比率" value="1"></el-option>
            <el-option label="固额" value="2"></el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="5">
        <span style="font-weight: bold;">扣款依据</span>
      </el-col>
      <el-col :span="5">
        <span style="font-weight: bold;">金额设置</span>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5" :offset="4">
        <span style="font-size: 20px;">&le;</span> &nbsp;
        <el-input size="mini" style="width: 80px;"></el-input>&nbsp;
        <span v-show="percentSignVisible" style="font-size: 20px;">%</span>
      </el-col>
      <el-col :span="5">
        <el-select size="mini">
          <el-option label="按固定金额扣款"></el-option>
          <el-option label="区间吨差*单位货值"></el-option>
        </el-select>
      </el-col>
      <el-col :span="5">
        <el-input size="mini" style="width: 120px;"></el-input>&nbsp;
        <span>元</span>
      </el-col>
      <el-col :span="5" style="text-align: right;">
        <i class="el-icon-circle-plus-outline" @click="handleSectionAdd"></i>
      </el-col>
    </el-row>
    <el-row :gutter="20" v-show="useSection">
      <el-col :span="4">
        <el-input size="mini" style="width: 80px;"></el-input>&nbsp;
        <span style="font-size: 20px;">&lt;</span>
      </el-col>
      <el-col :span="5">
        <span style="font-size: 20px;">&le;</span> &nbsp;
        <el-input size="mini" style="width: 80px;"></el-input>&nbsp;
      </el-col>
      <el-col :span="5">
        <el-select size="mini">
          <el-option label="按固定金额扣款"></el-option>
          <el-option label="区间吨差*单位货值"></el-option>
        </el-select>
      </el-col>
      <el-col :span="5">
        <el-select size="mini">
          <el-option label="自定义单位货值"></el-option>
          <el-option label="取发单时单位货值"></el-option>
        </el-select>
      </el-col>
      <el-col :span="5" style="text-align: right;">
        <i class="el-icon-remove-outline" @click="handleSectionRemove"></i>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5" :offset="4">
        <span style="font-size: 20px;">&gt;</span> &nbsp;
        <el-input size="mini" style="width: 80px;"></el-input>&nbsp;
        <span v-show="percentSignVisible" style="font-size: 20px;">%</span>
      </el-col>
      <el-col :span="5">
        <el-select size="mini">
          <el-option label="按固定金额扣款"></el-option>
          <el-option label="区间吨差*单位货值"></el-option>
          <el-option label="实际总吨差*单位货值"></el-option>
        </el-select>
      </el-col>
      <el-col :span="5">
        <el-select size="mini">
          <el-option label="自定义单位货值"></el-option>
          <el-option label="取发单时单位货值"></el-option>
        </el-select>
      </el-col>
      <el-col :span="5">
        <el-input size="mini" style="width: 80px;"></el-input>&nbsp;
        <span>元</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      percentSignVisible: true,
      useSection: false,
      form: {
        supertonRange: '', // 1比例 2固额
      },
    }
  },
  methods: {
    handleSectionAdd() {
      this.useSection = true;
    },
    handleSectionRemove() {
      this.useSection = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
}

.deficit-rise-config {
  border: 1px solid #ccc;
  padding: 10px;
  width: 1000px;
}

.el-icon-circle-plus-outline,
.el-icon-remove-outline {
  font-size: 24px;
  color: blue;
  cursor: pointer;
}
</style>