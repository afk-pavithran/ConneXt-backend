const mongoose = require('mongoose')
// const {JWT_SECRET} = require('../config')
const jwt = require('jsonwebtoken');
const UserModel = require('../Models/UserModel');


const regUser = async (req, res, next) => {
    const {firstname, lastname, username, email, password} = req.body;
    try {
        const user = await UserModel.create({firstname, lastname, username, email, password})
        if(user)
        {
            const token = await jwt.sign(user.id, process.env.JWT_SECRET || JWT_SECRET)
            res.json({msg: 'register success', token})
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
                
                const token = await jwt.sign(checkUser.id, process.env.JWT_SECRET || JWT_SECRET)
                console.log(token)
                res.json({msg: 'login success', token})
            }
            else throw 'wrong credentials'
        }else throw 'wrong credentials'
    } catch (error) {
        res.status(400).json(error)
    }

}

module.exports = {regUser, logUser}