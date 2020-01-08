var express = require('express');
var router = express.Router();
var user = require('../db/model/userModel')
/* GET users listing. */
router.post('/logout',(req,res)=>{
  let {uid} = req.body 
  let rootList=[]
  let token=null
  user.updateMany({_id:uid},{token:''})
  .then(()=>{
    res.send({err:0,msg:'退出成功'})
  })

})

module.exports = router;