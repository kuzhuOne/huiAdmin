//创建和产品表相关的数据类型

const mongoose = require('mongoose')

let productSchema = mongoose.Schema({
    name:{type:String,required:true},
    desc:{type:String,require:true},
    price:{type:String,required:true},  
    img:{type:String,required:true},   //图片的路径
    ProductType:{type:String,required:true}
})
let productModel = mongoose.model('produces',productSchema)
module.exports = productModel