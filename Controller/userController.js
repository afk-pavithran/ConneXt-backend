const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const UserModel = require('../Models/UserModel');


const regUser = async (req, res, next) => {
    const {firstname, lastname, username, email, password} = req.body;
    try {
        const user = await UserModel.create({firstname, lastname, username, email, password})
        if(user)
        {
            res.cookie('token', user.id)
            res.json({msg: 'register success', id: user.id})
        }
        else throw 'something went wrong'
    } catch (error) {
        res.status(400).json(error)
    }

}

const logUser = async (req, res, next) => {
    const {email, password} = req.body
    console.log(password)
    try {
        const checkUser = await UserModel.findOne({email})
        console.log(checkUser)
        if(checkUser)
        {
            if(checkUser.password === password)
            {
                res.cookie('token', checkUser.id, {httpOnly: true})
                res.json({msg: 'login success', id: checkUser.id})
            }
            else throw 'wrong credentials'
        }else throw 'wrong credentials'
    } catch (error) {
        res.status(400).json(error)
    }

}

module.exports = {regUser, logUser}