const express = require('express')
const router = express.Router()
const mations = require('../controller/mationsController')
//删除接口
router.get('/delmations',(req,res)=>{
    let  {mationsId}=req.query
    mations.del(mationsId)
      .then((data)=>{
        res.send({err:0,msg:'del ok'})
      })
      .catch((err)=>{
        res.send({err:-1,msg:'del nook'})
      })
  })
  //添加数据
  router.get('/addmations',(req,res)=>{
    let {id,classification,cover,tags} = req.query
    mations.add(id,classification,cover,tags)
      .then((data)=>{res.send({err:0,msg:'添加ok'})})
      .catch((err)=>{
        console.log(err)
        res.send({err:-1,msg:'添加失败'})})
  })
  //修改 
  router.get('/updatemations',(req,res)=>{
    let {id,classification,cover,tags} = req.query
    mations.update(id,classification,cover,tags)
      .then((data)=>{res.send({err:0,msg:'修改ok'})})
      .catch((data)=>{res.send({err:-1,msg:'修改失败'})})
  })
  // 获取数据
  router.get('/getmations',(req,res)=>{
    let page=Number(req.query.page)||1
    let pageSize=Number(req.query.pageSize)||10
    mations.get(page,pageSize)
      .then((data)=>{
        res.send({err:0,msg:'查询ok',list:data})
      })
      .catch((err)=>{
        console.log(err)
        res.send({err:-1,msg:'查询失败'})})
  })
  module.exports = router