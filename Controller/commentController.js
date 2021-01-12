const jwt = require('jsonwebtoken');
// const { JWT_SECRET } = require('../config');
const CommentModel = require('../Models/CommentModel');
const UserModel = require('../Models/UserModel');


const postComment = async (req, res, next) => {
    const {token} = req.headers;
    const {content} = req.body;
    const onPost = req.params.id;

    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET || JWT_SECRET)
        const checkUser = await UserModel.findOne({_id: decoded})
        if(checkUser)
        {
            const comment = await CommentModel.create({content, commentedBy: token, onPost})
            res.json('Commented successfully')
        }
        else throw 'error not found'
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = postComment;