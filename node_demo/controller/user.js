 const mongoose=require('mongoose');
 const Schema=mongoose.Schema;

 let  userSchema=new Schema({
    //  _id:{type:String,required:true},
     us:  {type:String,default:null},
     ps:  {type:String,default:null},
    
 })

 let userModel=mongoose.model('user',userSchema)
 module.exports=userModel