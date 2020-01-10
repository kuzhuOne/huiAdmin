// 创建和用户表相关的数据模型

const mongoose = require('mongoose')
let informationSchema= mongoose.Schema({
    id:{ type:String,required:false },
    title:{ type:String,required:true },
    type:{ type:String,required:true },
    source:{ type:String,required:false },
    time:{ type:String,required:false },
    num:{ type:Number,required:false },  //图片的路径  图片的base64数据
    state:{ type:Number,required:false },
   
})
let  informationModel = mongoose.model('informations',informationSchema)

module.exports = informationModel