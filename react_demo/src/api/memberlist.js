import axios from '../utils/axios'
// 获取商品列表
export const GetMemberList = async (page,pageSize)=>{  
  let url='/hehe/memberlist/getFoods' 
  let result = await axios.get(url,{
    params: {  
      page:page,
     pageSize:pageSize
   }
  })
  console.log(page,pageSize);
  if(result.err==0){
    return result 
  }else{
    throw result
  }
}
export const DelDownloadList = async (foodId)=>{  
  let url='/hehe/memberlist/delFood' 
  let result = await axios.get(url,{
    params: {  
      foodId:foodId
   }
  })
  if(result.err==0){
    return result 
  }else{
    throw result
  }
}

export const UpdateList = async ({_id,username,ip,time,url})=>{  
  let Url='/hehe/memberlist/updateFood' 
  
  let result = await axios.get(Url,{
    params: {  
      foodId:_id,
      username:username,
      ip:ip,
      time:time,
      url:url
   }
  })
  if(result.err==0){
    return result 
  }else{
    throw result
  }
}

export const GetKeyWord = async (kw,page,pageSize)=>{  
  let url='/hehe/memberlist/getFoodsByKw' 
  let result = await axios.get(url,{
    params: {  
      kw:kw,
      page:page,
      pageSize:pageSize
   }
  })
  console.log(page,pageSize,kw);
  if(result.err==0){
    console.log(result)
    return result 
  }else{
    throw result
  }
}