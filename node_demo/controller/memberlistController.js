// 存放和食品 数据操作的相关信息 数据库的操作
const memberlistModel = require('../db/model/memberlistModel')
//添加食品信息的方法
async function add(username,ip,time,url){
    console.log(username,ip,time,url)
    // async 函数内部只要不出错 肯定走的是then 如果出错走的是catch
    let result = await memberlistModel.insertMany({username,ip,time,url})
    console.log(result)
}
//分页查询食品信息的方法
async function get(page,pageSize){
    // 获取总的食品数据数组
    let allFoods =await memberlistModel.find()
    // 获取视食品数据 总数量
    let allCount =allFoods.length
    let foods = await memberlistModel.find().skip((page-1)*pageSize).limit(pageSize)
    return {foods,allCount}   
}
//分类查询食品信息的方法+分页
async function getByType(foodType,page,pageSize){
    // 获取总的食品数据数组
    let allFoods =await memberlistModel.find({foodType})
    // 获取视食品数据 总数量
    let allCount =allFoods.length
    let foods = await memberlistModel.find({foodType}).skip((page-1)*pageSize).limit(pageSize)
    return {foods,allCount}   
}
//关键字查询食品信息的方法+分页
async function getByKw(kw,page,pageSize){
    let regex = new RegExp(kw)//查询关键字的正则
    let allFoods =await memberlistModel.find({$or:[{username:{$regex:regex}}]})
    let allCount =allFoods.length
    let foods = await memberlistModel.find({$or:[{username:{$regex:regex}}]}).skip((page-1)*pageSize).limit(pageSize)
    return {foods,allCount}   
}
//删除
async function del(foodId){
     let result = await memberlistModel.deleteOne({_id:foodId})
     return result
}
//修改
async function update(foodId,username,ip,time,url){
    let result = await memberlistModel.updateOne({_id:foodId},{username,ip,time,url})
    return result
}


module.exports = {add,get,getByType,getByKw,del,update}