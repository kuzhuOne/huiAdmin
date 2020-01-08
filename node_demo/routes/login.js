var express = require('express');
var router = express.Router();
var jwt =require('../utils/jwt')
var adminModel = require('../db/model/userModel')
// const bodyParser = require('body-parser')
// router.use(bodyParser.urlencoded({ extended: false }))
// 登录
router.post('/login',(req,res)=>{
  let {us,ps} = req.body 
  let rootList=[]
  let token=null
  let _id=''
  adminModel.findOne({us,ps})
  .then((db)=>{
    if(!db) return  res.send({err:-1,msg:'login nook'})
    rootList=db.informations
     _id=db._id
     token =jwt.createToken({},60*60)
    return adminModel.updateMany({_id},{token})
  })
  .then((db)=>{
    res.send({err:0,msg:'ok',token,rootList,uid:_id})
  })
})

module.exports = router;
