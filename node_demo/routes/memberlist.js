const express = require('express')
const router = express.Router()
const Memberlist = require('../controller/memberlistController')


//实现添加接口
router.post('/addFood',(req,res)=>{
    let {id,username,ip,time,url} = req.body
    Memberlist.add(id,username,ip,time,url)
    .then((data)=>{res.send({err:0,msg:'添加成功'})})
    .catch((err)=>{
        console.log(err)
        res.send({err:-1,msg:'添加失败'})
    })
})
//实现查询接口
router.get('/getFoods',(req,res)=>{
    //console.log(req.query.page)
    let page = Number(req.query.page)||1
    let pageSize = Number(req.query.pageSize)||3
    Memberlist.get(page,pageSize)
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
    Memberlist.getByType(foodType,page,pageSize)
    .then((data)=>{res.send({err:0,msg:'查询成功',list:data})})
})
//实现关键字查询接口
router.get('/getFoodsByKw',(req,res)=>{
    let page = Number(req.query.page)||1
    let pageSize = Number(req.query.pageSize)||2
    let kw = req.query.kw
    Memberlist.getByKw(kw,page,pageSize)
    .then((data)=>{res.send({err:0,msg:'查询成功',list:data})})
})
//实现删除接口
router.get('/delFood',(req,res)=>{
    let {foodId} = req.body
    Memberlist.del(foodId)
    .then((data)=>{
        res.send({err:0,msg:'删除 ok'})
    })
    .catch((err)=>{
        res.send({err:-1,msg:'删除失败'})
    })
})

//实现修改接口
router.get('/updateFood',(req,res)=>{
    let {foodId,username,ip,time,url} = req.query
    console.log(foodId,username,ip,time,url)
    Memberlist.update(foodId,username,ip,time,url)
    .then((data)=>{
        res.send({err:0,msg:'修改成功',list:data})
    })
    .catch((data)=>{
        res.send({err:-1,msg:'修改失败'})
    })
})
module.exports = router