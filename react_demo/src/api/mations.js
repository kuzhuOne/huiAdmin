import axios from '../utils/axios'
// 删除
export const getMations = async (page,pageSize)=>{  
    let url='/hehe/mations/getmations' 
    let result = await axios.get(url,{
      params: {  
        page,pageSize
     }
    })
    if(result.err==0){
      return result 
    }else{
      throw result
    }
  }