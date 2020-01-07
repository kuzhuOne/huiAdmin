import axios from '../utils/axios'
import {} from '../utils/webStorage'
export const UserLogin=(us,ps)=>{
    return new Promise((resolve,reject)=>{
        let url = 'daye/login/login'
        axios.get(url,{us,ps})
        .then((res)=>{
            resolve(res)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}