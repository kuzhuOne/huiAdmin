import axios from '../utils/axios'
// import {} from '../utils/webStorage'
export const UserLogin=(us,ps)=>{
    return new Promise((resolve,reject)=>{
        let url = '/hehe/login/login'
        axios.post(url,{us,ps})
        .then((res)=>{
            console.log(res)
            resolve(res)
        })
        .catch((err)=>{
            reject(err)
            console.log(err)
        })
    })
}