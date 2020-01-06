var express = require('express');
var router = express.Router();
var user = require('../db/model/userModel')
// 登录
router.get('/login', function(req, res, next) {
  let {us,ps} =req.query
  user.find({us,ps})
  .then((data)=>{
   console.log(data)
  })
});




module.exports = router;
