const mongoose = require('mongoose')
let commentSchema = mongoose.Schema({
    id:{ type:String,require:true },
    user:{type:String,require:true},
    content:{type:String,require:true}
})
let commentModel = mongoose.model('comments',commentSchema)

module.exports = commentModel