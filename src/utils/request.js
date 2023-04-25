import axios from 'axios'
// import { getToken } from '@/utils/auth'

// create an axios instance
const http = axios.create({
  // 外网更新
  // baseURL: 'http://xxxxx',
  baseURL: 'https://121.196.234.244:8081',
  timeout: 5000 // request timeout
})

// 添加请求拦截器
http.interceptors.request.use(function (config) {
    console.log("here");
    console.log(config);
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default http;
