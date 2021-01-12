const jwt = require('jsonwebtoken');
// const { JWT_SECRET } = require('../config');
const CommentModel = require('../Models/CommentModel');
const PostModel = require('../Models/PostModel');
const UserModel = require('../Models/UserModel')


const createPost = async(req, res, next) => {
    const {title, body} = req.body;

    const {token} = req.headers;
    console.log(title, body, token)
    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET || JWT_SECRET)
        const checkUser = await UserModel.findOne({_id: decoded})
        if(checkUser)
        {
            console.log(checkUser)
            const post = await PostModel.create({title, body, postedBy: checkUser.id})
            res.json('posted successfully')
        }   
        else throw 'user not found'
    } catch (error) {
        res.status(400).json(error)
    }
}

const getPosts = async (req, res, next) => {
    const {token} = req.headers;
    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET || JWT_SECRET)
        const checkUser = await UserModel.findOne({_id: decoded})
        if(checkUser)
        {
            const posts = await PostModel.find();
            res.json({msg: 'success', data: posts})
        }
        else throw 'user not found'
    } catch (error) {
        res.status(400).json(error)
    }
}

const getSinglePost = async (req, res, next) => {
    const postId = req.params.id;
    const {token} = req.headers;
    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET || JWT_SECRET)
        const checkUser = await UserModel.findOne({_id: decoded})
        if(checkUser)
        {
            const post = await PostModel.findOne({_id: postId})
            const comments = await CommentModel.find({onPost: postId})
            res.json({msg:'success', post, comments})
        }
        else throw 'user not found'
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {createPost, getPosts, getSinglePost}