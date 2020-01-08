const express = require('express')
const router = express.Router()
const Download = require('../controller/downloadControl')


//实现添加接口
router.post('/addFood',(req,res)=>{
    let {id,username,ip,time,url} = req.body
    Download.add(id,username,ip,time,url)
    .then((data)=>{res.send({err:0,msg:'添加成功'})})
    .catch((err)=>{
        console.log(err)
        res.send({err:-1,msg:'添加失败'})
    })
})
//实现查询接口
router.get('/getFoods',(req,res)=>{
    let page = Number(req.query.page)||1
    let pageSize = Number(req.query.pageSize)||2
    Download.get(page,pageSize)
    .then((data)=>{res.send({err:0,msg:'查询成功',list:data})})
    .catch((err)=>{
        console.log(err)
        res.send({err:-1,msg:'查询失败'})
    })
})
//实现分类查询接口
router.get('/getFoodsByType',(req,res)=>{
    let {foodType} = req.query
    let page = Number(req.query.page)||1
    let pageSize = Number(req.query.pageSize)||2
    Download.getByType(foodType,page,pageSize)
    .then((data)=>{res.send({err:0,msg:'查询成功',list:data})})
})
//实现关键字查询接口
router.get('/getFoodsByKw',(req,res)=>{
    let page = Number(req.query.page)||1
    let pageSize = Number(req.query.pageSize)||2
    let kw = req.query.kw
    Download.getByKw(kw,page,pageSize)
    .then((data)=>{res.send({err:0,msg:'查询成功',list:data})})
})
//实现删除接口
router.get('/delFood',(req,res)=>{
    let {foodId} = req.query
    Download.del(foodId)
    .then((data)=>{
        res.send({err:0,msg:'删除 ok'})
    })
    .catch((err)=>{
        res.send({err:-1,msg:'删除失败'})
    })
})

//实现修改接口
router.get('/updateFood',(req,res)=>{
    let {foodId,name,price,img,foodType,desc} = req.query
    Download.update(foodId,name,price,img,foodType,desc)
    .then((data)=>{
        res.send({err:0,msg:'修改成功',list:data})
    })
    .catch((data)=>{
        res.send({err:-1,msg:'修改失败'})
    })
})
module.exports = router