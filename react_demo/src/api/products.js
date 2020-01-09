import axios from '../utils/axios'
export const getData=()=>{
    let url='/hehe/produce/getProducts'
    return new Promise((resolve,reject)=>{
        axios.get(url)
        .then((res)=>{
            resolve(res)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}




