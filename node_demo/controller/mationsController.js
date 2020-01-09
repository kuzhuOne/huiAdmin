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
    module.exports = {del, update,add }