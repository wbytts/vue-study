import axios from 'axios';
import qs from 'qs';

// axios默认参数
axios.defaults.responseType = 'json';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// 默认请求实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000, // 请求超时时间（毫秒）
  headers: {
    // 'Content-Type' : 'application/x-www-form-urlencoded;charset=UTF-8'
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.message == 'Network Error') {
      MessageBox.confirm('网络错误，请检查服务端，请【点击重试】！', '提示', {
        confirmButtonText: '点击重试',
        type: 'warning',
        showClose: false,
        showCancelButton: false,
        closeOnClickModal: false,
      }).then(() => {
        // 重新请求
        let back = new Promise((resolve, reject) => {
          console.log('接口' + error.config.url + '请求失败，重新请求');
          resolve();
        });
        back.then(() => service(error.config));
      });
    } else {
      return Promise.reject(error);
    }
  },
);

export default service;

// ############################################################################################
