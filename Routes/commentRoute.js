const express = require('express')
const postComment = require('../Controller/commentController')

const commentRouter = express.Router()

commentRouter.post('/api/post/:id', postComment)


module.exports = commentRouter;