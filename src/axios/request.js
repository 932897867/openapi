import {
  ElMessage
} from 'element-plus'

//对axios进行二次封装,将axios导入
import axios from 'axios';
//利用axios对象的方法create,创建一个axios实例
const request = axios.create({
  //基础路径
  baseURL: '/', //请求公共地址部分
  timeout: 3000 //请求超时时间，超出5秒未取得结果时，提示请求超时
});

//请求拦截器，interceptors.request拦截器对象
request.interceptors.request.use((config) => {
    //   config:请求拦截器回调注入的对象(配置对象),配置对象的身上最终要的一件事情headers属性
    //   可以通过请求头携带公共参数-token
    config.headers['Authorization'] = 'Bearer' + ' ' + localStorage.getItem('token')
    return config; // 将配置完成的config对象返回出去 如果不返回 请求讲不会进行
  },
  error => {
    // 请求错误处理
    console.log('Request Error:', error)
    return Promise.reject(error)
  });

//响应拦截器
request.interceptors.response.use((response) => {
  // 响应拦截器成功的回调，一般会简化数据
  if (response.status === 200 || response.data.code === 200) {
    return Promise.resolve(response.data)
  } else {
    return Promise.reject(response.data)
  }
}, (error) => {
  // 处理http网咯错误
  let status = error.response.status;
  // console.log(error);
  switch (status) {
    case 404:
      // 错误的提示信息
      ElMessage({
        type: 'error',
        message: '请求失败路径出现问题'
      })
      break;
    case 500 | 501 | 502 | 503 | 504 | 505:
      // 错误的提示信息
      ElMessage({
        type: 'error',
        message: '服务器挂了'
      })
      break;
    case 401:
      // 错误的提示信息
      ElMessage({
        type: 'error',
        message: '请求参数有误'
      })
      break;
  }
  return Promise.reject(new Error(error.message))
})

//对外暴露axios
export default request;