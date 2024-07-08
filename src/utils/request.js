import axios from "axios";
import { Message } from "element-ui";
import store from "@/store";

// axios({})
// create an axios instance  axios
// baseURL : 以后用service 发出的任何请求 都会加上http://localhost:8090 一旦服务器的地址改变了 我们只要改一个地方就行
// 创建axios 用这个axios 发出的任何请求 都带有前缀
const service = axios.create({
  baseURL: "http://localhost:8099", // url = base url + request url8090
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 20000, // request timeout
});

// 以后用service 发出的请求都会被拦截
// 往请求头中 塞入一个键值对  X_Token=123456
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    // 我们每往服务器发一个request  都会往请求头里面添加一个 token(令牌)
    var s_userInfo = JSON.stringify(store.state.userInfo)
    console.log("token: " +s_userInfo);
    if (s_userInfo) {
      console.log('好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶')
    config.headers["X-Token"] = JSON.parse(s_userInfo).token;
    }
    return config
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    console.log("error,请求发送失败");
    return Promise.reject(error);
  }
);

// // 用service 发的请求 返回响应也会被拦截
service.interceptors.response.use(
  // 正常会来  status200
  (response) => {
    console.log(response.data);

    console.log("response,请求成功");
    console.log("code: " + response.data.code);
    const res = response.data;

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== '200') {
      // console.log(response.status);
      // elemet ui mssage插件
      Message({
        message: res.message || "Error",
        type: "error",
        duration: 3 * 1000,
      });
    }
    return res;
  },

  // 400 前端  // 500 服务器
  // status 不是200  403 404 405
  (error) => {
    // console.log("err" + error); // for debug
    Message({
      message: error.message || "我是默认的错误信息，Error",
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
