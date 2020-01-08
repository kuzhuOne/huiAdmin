const CommentModel = require('../db/model/commentModel')
async function add(id,user,content){
    let result =await CommentModel.insertMany({id,user,content})
    console.log(result) 
}

async function del(foodId){
    let result = await  CommentModel.deleteOne({_id:foodId})
    return result
  }

module.exports={add,del}