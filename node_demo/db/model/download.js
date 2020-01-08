// 创建和下载列表相关的数据模型

const mongoose = require('mongoose')
let downloadSchema= mongoose.Schema({
    id:{ type:String,required:true },
    username:{ type:String,required:true }, 
    ip:{ type:String,required:true },
    time:{ type:String,required:true },
    url:{ type:String,required:true },
})
let  downloadModel = mongoose.model('downloads',downloadSchema)

module.exports = downloadModel