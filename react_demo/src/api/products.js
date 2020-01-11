import axios from '../utils/axios'

// 获取数据
export const getData=(page,pageSize)=>{
    let url='/hehe/produce/getProducts'
    return new Promise((resolve,reject)=>{
        axios.get(url,{params:{page,pageSize}})
        .then((res)=>{
            resolve(res)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}
export const getMation=()=>{
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


//删除数据
export const delData=(productId)=>{
    let url='/hehe/produce/delProduct'
    return new Promise((resolve,reject)=>{
        axios.get(url,{params:{productId}})
        .then((res)=>{
            resolve(res)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}       
    


