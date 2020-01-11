const mongoose = require('mongoose')
let informationSchema= mongoose.Schema({
    id:{ type:String,required:true },
    classification:{ type:String,required:true }, //分类
    cover:{ type:String,required:true },  //封面
    tags:{ type:String,required:true },
    
   
})
let  informationModel = mongoose.model('mations',informationSchema)

module.exports = informationModel