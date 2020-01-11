// 创建和下载列表相关的数据模型

const mongoose = require('mongoose')
let memberlistSchema= mongoose.Schema({
    username:{ type:String,required:true }, 
    sex:{ type:String,required:true },
    phone:{ type:String,required:true },
    email:{ type:String,required:true },
    address:{ type:String,required:true },
    time:{ type:String,required:true },
    status:{ type:String,required:true },
})
let  memberlistModel = mongoose.model('memberlists',memberlistSchema)

module.exports = memberlistModel