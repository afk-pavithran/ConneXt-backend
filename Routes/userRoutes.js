const express = require('express');
const { logUser, regUser } = require('../Controller/userController');


const userRouter = express.Router();


//register route
userRouter.post('/api/user', regUser)

//login route
userRouter.get('/api/user', logUser)



module.exports = userRouter;