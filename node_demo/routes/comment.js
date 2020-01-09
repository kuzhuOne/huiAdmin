var express = require('express');
var router = express.Router();
const Comment = require('../controller/commentController')
//添加数据
router.get('/addComment',(req,res)=>{
  let {id,user,content} = req.query
  Comment.add(id,user,content)
  .then((data)=>{res.send({err:0,msg:'添加ok'})})
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'添加失败'})
  })
})

//删除接口
router.get('/delComment',(req,res)=>{
  let  {CommentId}=req.query
  Comment.del(CommentId)
    .then((data)=>{
      res.send({err:0,msg:'del ok'})
    })
    .catch((err)=>{
      res.send({err:-1,msg:'del 失败'})
    })
})

module.exports = router;
