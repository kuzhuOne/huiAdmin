// 创建和用户表相关的数据模型
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let  adminSchema = new Schema({
    userName:      {type:String,required:true},
    passWord:      {type:String,required:true},
    rootLevel:      {type:Number,default:0},
    token: {type:String},
    rootList: {type:Array,required:true},
    ctime: { type: Date, default: Date.now }

})

let adminsModel=mongoose.model('users',adminSchema)
module.exports= adminsModel


