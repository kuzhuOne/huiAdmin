//存放和产品，数据操作的相关信息，数据库的操作
const ProductModel = require('../db/model/products')

//添加产品
async function add(name,desc,price,img,ProductType){
    let result = await ProductModel.insertMany({name,desc,price,img,ProductType})
    console.log(result)
}

//查询
async function get(page,pageSize){
    // 获取总的食品数据数组
    let allProducts =await ProductModel.find()
    // 获取视食品数据 总数量
    let allCount =allProducts.length 
    let Products = await ProductModel.find().skip((page-1)*pageSize).limit(pageSize)
    return  {Products,allCount}
  }


// 关键字查询+分页
async function getByKw(kw,page,pageSize){
    let regex=new RegExp(kw) //查询关键字的正则 
    let  allProducts=await ProductModel.find({$or:[{name:{$regex:regex}},{desc:{$regex:regex}}]})
    let  allCount = allProducts.length
    let  Products=await ProductModel.find({$or:[{name:{$regex:regex}},{desc:{$regex:regex}}]}).skip((page-1)*pageSize).limit(pageSize)
    return {Products,allCount}
}
  



// 删除
async function del(productId){
    let result = await ProductModel.deleteOne({_id:productId})
    return result
  }
   
// 修改
async function update(productId,name,price,img,desc,ProductType){
    let result  = await FoodModel.updateOne({_id:productId},{name,price,img,ProductType,desc})
     console.log(result)
     return  result
  }

module.exports={
    add,
    get,
    del,
    update,
    getByKw
}