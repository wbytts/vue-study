import axios from "axios";
import qs from 'qs';

// axios默认参数
axios.defaults.responseType = "json";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

// 请求拦截器
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(errorData);x
  }
);


export default axios;

