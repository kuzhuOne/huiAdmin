// 存放和食品 数据操作的相关信息 数据库的操作
const InformationModel= require('../db/model/informationModel')

async function  add(id=0,title,type,source='0',time=new Date(),num=0,state=0){
  // async 函数内部只要不出错 肯定走的是then 如果出错走的是catch
   let result =await InformationModel.insertMany({id,title,type,source,time,num,state})
   console.log(result)
}
async function get(page,pageSize){
  // 获取总的食品数据数组
  let allFoods =await InformationModel.find()
  // 获取视食品数据 总数量
  let allCount =allFoods.length
  let foods = await InformationModel.find().skip((page-1)*pageSize).limit(pageSize)
  return  {foods,allCount}
}

// 分类查询+分页
async function getByType(foodType,page,pageSize){
  let allFoods=await InformationModel.find({foodType})
  let allCount=allFoods.length
  let  foods=await InformationModel.find({foodType}).skip((page-1)*pageSize).limit(pageSize)
  return {foods,allCount}
}
// 关键字查询+分页
async function getByKw(kw,page,pageSize){
 let regex=new RegExp(kw) //查询关键字的正则
 let  allFoods=await InformationModel.find({$or:[{name:{$regex:regex}},{desc:{$regex:regex}}]})
 let  allCount = allFoods.length
 let  foods=await InformationModel.find({$or:[{name:{$regex:regex}},{desc:{$regex:regex}}]}).skip((page-1)*pageSize).limit(pageSize)
 return {foods,allCount}
}

// 删除
async function del(foodId){
  let result = await  InformationModel.deleteOne({_id:foodId})
  return result
}

// 修改
async function  update(foodId,name,price,img,foodType,desc){

  let result  = await InformationModel.updateOne({_id:foodId},{name,price,img,foodType,desc})
   console.log(result)
   return  result
}
module.exports={add,get,getByType,getByKw,del,update}
