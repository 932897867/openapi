import { http } from "./http";

// 调用测试
export function getTest() {
  return http({
    url: "/api/helloworld", //此处为自己请求地址
    method: "get",
  });
}

export function postText(params) {
  return http({
    url: "/api/helloworld", //此处为自己请求地址
    method: "post",
    data: {
      custName: '123'
    },
  });
}