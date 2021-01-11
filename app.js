//imports
const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');
const userRouter = require('./Routes/userRoutes');




const app = express();
app.use(express.json())

//register & login
app.get('/', (req, res) => res.json('Deployed'))
app.use('/', userRouter)

app.get('/', (req, res) => res.json('Deployed'))


app.listen(process.env.PORT || 4000, () => {
    mongoose.connect(process.env.MONGO_URI ||MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true} )
    console.log('App and db connected')
})