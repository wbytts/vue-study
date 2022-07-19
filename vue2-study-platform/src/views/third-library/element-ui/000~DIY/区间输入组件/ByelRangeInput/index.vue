<template>
  <div class="byel-range-input">
    <el-form ref="form" :model="form" :rules="rules">
      <div class="prefix">(&nbsp;</div>
      <div class="start">
        <el-form-item prop="start">
          <el-input v-model="form.start" size="mini"></el-input>
        </el-form-item>
      </div>
      <div class="middle">&nbsp;,&nbsp;</div>
      <div class="end">
        <el-form-item prop="end">
          <el-input v-model="form.end" size="mini"></el-input>
        </el-form-item>
      </div>
      <div class="suffix">&nbsp;)</div>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    const validateStart = (rule, value, callback) => {
      this.$refs.form.clearValidate();
      if (!value) {
        return callback(new Error('不能为空'));
      }
      if (!/^([1-9][0-9]*)+(.[0-9]{1,3})?$/.test(value)) {
        return callback(new Error('请输入数字,最多三位小数'));
      }
      if (this.form.end === '') {
        return callback('请输入完整');
      }
      if (+this.form.start >= +this.form.end) {
        return callback(new Error('区间错误'));
      }
      return callback();
    };
    const validateEnd = (rule, value, callback) => {
      this.$refs.form.clearValidate();
      if (!value) {
        return callback(new Error('不能为空'));
      }
      if (!/^([1-9][0-9]*)+(.[0-9]{1,3})?$/.test(value)) {
        return callback(new Error('请输入数字,最多三位小数'));
      }
      if (this.form.end === '') {
        return callback('请输入完整');
      }
      if (+this.form.start >= +this.form.end) {
        return callback(new Error('区间错误'));
      }
      return callback();
    };
    return {
      form: {
        start: '',
        end: '',
      },
      rules: {
        start: [{ validator: validateStart, trigger: 'change' }],
        end: [{ validator: validateEnd, trigger: 'change' }],
      },
    };
  },
  methods: {
    updateValue() {
      this.$emit('update:value', `(${this.form.start},${this.form.end})`);
    },
  },
  watch: {
    start() {
      this.updateValue();
    },
    end() {
      this.updateValue();
    },
    value: {
      handler() {
        let [start, end] = this.value.replace('(', '').replace(')', '').split(',');
        this.form.start = start;
        this.form.end = end;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.byel-range-input {
  .el-input {
    width: 80px;
    display: inline-block;
  }
  .prefix {
    display: inline-block;
    font-size: 24px;
  }
  .suffix {
    display: inline-block;
    font-size: 24px;
  }
  .middle {
    display: inline-block;
    font-size: 24px;
  }
  .start {
    display: inline-block;
  }
  .end {
    display: inline-block;
  }
}

.el-form-item.is-success .el-input__inner,
.el-form-item.is-success .el-input__inner:focus,
.el-form-item.is-success .el-textarea__inner,
.el-form-item.is-success .el-textarea__inner:focus {
  border-color: #67c23a;
}
.el-form-item.is-success .el-input-group__append .el-input__inner,
.el-form-item.is-success .el-input-group__prepend .el-input__inner {
  border-color: transparent;
}
.el-form-item.is-success .el-input__validateIcon {
  color: #67c23a;
}
</style>

