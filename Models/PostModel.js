const {Schema, model} = require('mongoose')

const postSchema = new Schema({
    title: {type: String, required: true},
    body: {type:String, required: true},
    postedBy: {type: Schema.Types.ObjectId, ref: 'User'}
})

const PostModel = model('Post', postSchema)

module.exports = PostModel;