const express = require('express');
const { createPost, getPosts, getSinglePost } = require('../Controller/postController');



const postRouter = express.Router();

postRouter.post('/api/post', createPost)

postRouter.get('/api/post', getPosts)

postRouter.get('/api/post/:id', getSinglePost)

module.exports = postRouter;