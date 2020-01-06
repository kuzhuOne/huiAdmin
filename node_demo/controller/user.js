const InformationModel= require('../db/model/userModel')
async function add(us,ps){
  // async 函数内部只要不出错 肯定走的是then 如果出错走的是catch
   let result =await InformationModel.insertMany({us,ps})
   console.log(result)
}
module.exports={add}