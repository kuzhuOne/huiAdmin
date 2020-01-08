const express = require('express');
const router = express.Router();
const Product = require('../controller/productController')

// 查询接口
router.get('/getProducts',(req,res)=>{
  let page=Number(req.query.page) || 1
  let pageSize = Number(req.query.pageSize) || 2
  Product.get(page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'查询OK',list:data})
  })
  .catch((err)=>{
    res.send({err:-1,msg:'查询失败'})
  })
});

// 关键字查询
router.get('/getProductssByKw',(req,res)=>{
  let page=Number(req.query.page)||1
  let pageSize = Number(req.query.pageSize)||2
  let kw = req.query.kw 
  Food.getByKw(kw,page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'ok',list:data})
  })
})

//添加数据
router.post('/addProduct',(req,res)=>{
  let {name,desc,price,img,ProductType} = req.body
  Product.add(name,desc,price,img,ProductType)
  .then((data)=>{res.send({err:0,msg:'添加ok'})})
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'添加失败'})})
})

//删除接口
router.get('/delProduct',(req,res)=>{
  let  {productId}=req.query
  Product.del(productId)
  .then((data)=>{
    res.send({err:0,msg:'删除成功'})
  })
  .catch((err)=>{ 
    res.send({err:-1,msg:'删除失败'})
  })
})

module.exports = router;
