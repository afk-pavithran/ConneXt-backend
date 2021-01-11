const {Schema, model} = require('mongoose')

const commentSchema = new Schema({
    content: {type: String, required: true},
    commentedBy: {type: Schema.Types.ObjectId, ref: 'User'},
    onPost: {type: Schema.Types.ObjectId, ref: 'Post'}
})

const CommentModel = model('Comment', commentSchema)

module.exports = CommentModel