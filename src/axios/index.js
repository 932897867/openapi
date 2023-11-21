// // 调用测试
// export function getTest() {
//   return http({
//     url: "/api/helloworld", //此处为自己请求地址
//     method: "get",
//   });
// }

// export function postText(params) {
//   return http({
//     url: "/api/helloworld", //此处为自己请求地址
//     method: "post",
//     data: {
//       custName: '123'
//     },
//   });
// }


import request from './request'

// 用户登录
export function getTest(data) {
  return request({
    url: "/api/helloworld", //此处为自己请求地址
    method: "get",
  })
}
// 获取用户信息
export function postText(params) {
  return request({
    url: "/api/helloworld", //此处为自己请求地址
    method: "post",
    params,
  })
}
