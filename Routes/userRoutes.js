const express = require('express');
const { logUser, regUser } = require('../Controller/userController');


const userRouter = express.Router();


//register route
userRouter.post('/api/register', regUser)

//login route
userRouter.post('/api/login', logUser)



module.exports = userRouter;