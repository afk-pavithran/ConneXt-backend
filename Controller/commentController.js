const jwt = require('jsonwebtoken');
const CommentModel = require('../Models/CommentModel');
const UserModel = require('../Models/UserModel');


const postComment = async (req, res, next) => {
    const {token} = req.headers;
    const {content} = req.body;
    const onPost = req.params.id;

    try {
        const checkUser = await UserModel.findOne({_id: token})
        if(checkUser)
        {
            const comment = await CommentModel.create({content, commentedBy: token, onPost})
            res.json('Commented successfully')
        }
        else throw 'error not found'
    } catch (error) {
        res.json(error)
    }
}

module.exports = postComment;