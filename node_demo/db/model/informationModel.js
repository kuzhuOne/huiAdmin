// 创建和用户表相关的数据模型

const mongoose = require('mongoose')
let informationSchema= mongoose.Schema({
    id:{ type:String,required:true },
    title:{ type:String,required:true },
    type:{ type:String,required:true },
    source:{ type:String,required:true },
    time:{ type:String,required:true },
    num:{ type:String,required:true },  //图片的路径  图片的base64数据
    state:{ type:String,required:true },
   
})
let  informationModel = mongoose.model('informations',informationSchema)

module.exports = informationModel