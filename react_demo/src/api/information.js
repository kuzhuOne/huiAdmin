import axios from '../utils/axios'
import {getItem} from '../utils/webStorage'
// 获取商品列表

export const GetInformation = async (page,pageSize)=>{
  let url='/information/getInformation'
  let result = await axios.get(url,{params:{page,pageSize}})
  if(result.err==0){
    return result
  }else{
    throw result
  }
}
//根据id删除数据
// 復zんíゞ这句话 ₴TaV31YzbIr6₴ 然后咑閞【淘宀┡ēAPP】復zんíゞ这句话 ₴TaV31YzbIr6₴ 然后咑閞【淘宀┡ēAPP】
export const DelInformation = async (foodId)=>{
  let url='/hehe/v1/admin/food/delFood'
  let result = await axios.post(url,{foodId})
  if(result.err==0){
    return result
  }else{
    throw result
  }
}
//添加
export const AddInformation= async ({id=0,title,aa,source='0',time='0',num=0,state=false})=>{
console.log(title)
  let url='/information/addInformation'
let result = await axios.get(url, {
    params: {
      title,type:aa,id:0,source:'H-ui',time:new Date(),num:0,state:0
    }
  })
   if(result.err==0){
      return result
      }

}

//修改数据
export const UpdateGood = async ({_id,name,price,img,foodType,desc})=>{
  let url='/hehe/v1/admin/food/updateFood'
  let foodId=_id
  let result = await axios.post(url,{foodId,name,price,img,foodType,desc})
  if(result.err==0){
    return result
  }else{
    throw result
  }
}