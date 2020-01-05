const express = require('express')
const router = express.Router()
const Information = require('../controller/informationController')

//查询接口（分页查询  分类查询 关键字查询）
router.get('/getInformation',(req,res)=>{
  let page=Number(req.query.page)||1
  let pageSize=Number(req.query.pageSize)||2
  Information.get(page,pageSize)
    .then((data)=>{
      res.send({err:0,msg:'查询ok',list:data})
    })
    .catch((err)=>{
      console.log(err)
      res.send({err:-1,msg:'查询失败'})})
})
// 分类查询
router.get('/getInformationByType',(req,res)=>{
  let {InformationType} = req.query
  let page=Number(req.query.page)||1
  let pageSize = Number(req.query.pageSize)||2
  Information.getByType(InformationType,page,pageSize)
    .then((data)=>{
      res.send({err:0,msg:'查询ok',list:data})
    })
})
// 关键字查询
router.get('/getInformationByKw',(req,res)=>{
  let page=Number(req.query.page)||1
  let pageSize = Number(req.query.pageSize)||2
  let kw = req.query.kw
  Information.getByKw(kw,page,pageSize)
    .then((data)=>{
      res.send({err:0,msg:'ok',list:data})
    })
})
//删除接口
router.get('/delInformation',(req,res)=>{
  let  {InformationId}=req.query
  Information.del(InformationId)
    .then((data)=>{
      res.send({err:0,msg:'del ok'})
    })
    .catch((err)=>{
      res.send({err:-1,msg:'del nook'})
    })
})
//添加数据
router.get('/addInformation',(req,res)=>{
  let {id,title,type,source,time,num,state} = req.query
  Information.add(id,title,type,source,time,num,state)
    .then((data)=>{res.send({err:0,msg:'添加ok'})})
    .catch((err)=>{
      console.log(err)
      res.send({err:-1,msg:'添加失败'})})
})
//修改 
router.get('/updateInformation',(req,res)=>{
  let {InformationId,name,price,img,InformationType,desc} = req.query
  Information.update(InformationId,name,price,img,InformationType,desc)
    .then((data)=>{res.send({err:0,msg:'修改ok'})})
    .catch((data)=>{res.send({err:-1,msg:'修改失败'})})
})
module.exports = router