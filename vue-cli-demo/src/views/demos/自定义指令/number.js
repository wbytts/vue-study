import Vue from 'vue';

Vue.directive('number', {
  inserted: function (el, binding) {
    //注意这里element与ant不同   ant为 const input = el.querySelector(el);
    const input = el.querySelector('.el-input__inner');
    const {length, precision} = binding.value;
    input.onkeyup = function (e) {
      let val = e.target.value;
      if(val.length > length) {
        input.value = val.substr(0, val.length-1);
        return;
      }
      input.value = val.replace(/[^\d\.]/g, '');
      input.value = input.value.replace(/^\./g, '');
      input.value = input.value.replace(/\.{2,}/g, '.');
      input.value = input.value.replace(/\.{2,}/g, '.');
      input.value = input.value.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
      input.value = input.value.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
      input.value = input.value.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');
      if (input.value == '00') {
        //输入 000000 时，转成 0
        input.value = 0;
      }
    };

    input.onblur = function (e) {
      input.value = input.value.replace(/[^\d\.]/g, '');
      input.value = input.value.replace(/^\./g, '');
      input.value = input.value.replace(/\.{2,}/g, '.');
      input.value = input.value.replace(/\.{2,}/g, '.');
      input.value = input.value.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
      input.value = input.value.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
      input.value = input.value.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');
      if (input.value == '0') {
        //输入0的时候转成空    或者可自行调节   0.00  看需求
        input.value = '';
      }

      if (input.value.split('.')[1] == '') {
        // 把 123. 的数据转成 123
        input.value = input.value.split('.')[0];
      }

      if (input.value.substr(0, 1) == '0' && input.value.substr(1, 1) != '.') {
        //把  0123456 的数据转成  123456
        input.value = input.value.substr(1, input.value.length - 1);
      }

      if(!input.value.split('').includes('.')) {
        input.value += '.00'
      }
    };
  },
});
