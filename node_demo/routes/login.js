var express = require('express');
var router = express.Router();
var jwt =require('../utils/jwt')
var user = require('../db/model/userModel')
// 登录
router.post('/login',(req,res)=>{
  let {us,ps} = req.body 
  // let rootList=[]
  let token=null
  let _id=''
  user.findOne({us,ps})
  .then((db)=>{
    if(!db) return  res.send({err:-1,msg:'login nook'})
    // rootList=db.rootList
     _id=db._id
     token =jwt.createToken({},60*60)
    return user.updateMany({_id},{token})
  })
  .then((db)=>{
    res.send({err:0,msg:'ok',token,uid:_id})
  })
})




module.exports = router;
