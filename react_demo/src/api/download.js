import axios from '../utils/axios'
// 获取商品列表
export const GetDownloadList = async (page,pageSize)=>{  
  let url='/hehe/download/getFoods' 
  let result = await axios.get(url,{page,pageSize})
  if(result.err==0){
    return result
    
  }else{
    throw result
  }
}