import axios from "axios"
import {getItem} from './webStorage'
import store from  '../store/store'
import ActionCreator from  '../store/actionCreator'
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  //从缓存获取token 添加
  // config.data.token=getItem('token')
  // console.log(config)
  config.data.token=getItem('token')||''
//   if(localStorage.getItem('token')){
//     axios.defaults.headers.commom['token']=localStorage.getItem('token')
// }
    
  console.log(config)
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
  
// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  console.log(response.data.err)
  let list=[1,2,3]
  if(list.indexOf(response.data.err)!==-1){
    // token 出问题了
    
    store.dispatch(ActionCreator.setTokenModal(true))

    return Promise.reject(response);
  }
  return response.data;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});
  export default axios