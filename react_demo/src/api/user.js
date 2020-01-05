import axios from "../utils/axios"
import {getItem} from "../utils/webStorage"
export const UserLogin=(us,ps)=>{
  return new Promise((resolve,reject)=>{
    let url="/v1/admin/user/login"
    axios.port(url,{us,ps})
      .then((res)=>{
        if(res.err=0){
          resolve(res)
        }
      })
      .catch((err)=>{
        reject(err)
      })
  })
}
export const UserLogout=async ()=>{
  let url="/logout"
  let uid=getItem("uis")
  let result =await axios.post(url,{uid})
  if(result.err=0){
    return result
  }else{
    throw result
  }
}