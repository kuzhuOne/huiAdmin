const mationsController = require('../db/model/mations')
    // 删除
    async function del(Id) {
        let result = await mationsController.deleteOne({ _id: Id })
        return result
    }

    // 修改
    async function update(id, classification, cover, tags) {

        let result = await mationsController.updateOne({ _id:id }, {id, classification, cover, tags})
        console.log(result)
        return result
    }
    // 添加
    async function add(id, classification, cover, tags) {

        let result = await mationsController.insertMany({id, classification, cover, tags})
        console.log(result)
        return result
    }
    // 获取
    async function get(page,pageSize){
        // 获取总的食品数据数组
        let allFoods =await mationsController.find()
        // 获取视食品数据 总数量
        let allCount =allFoods.length
        let foods = await mationsController.find().skip((page-1)*pageSize).limit(pageSize)
        return  {foods,allCount}
      }
    module.exports = {del, update,add ,get}