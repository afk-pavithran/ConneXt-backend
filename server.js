const express = require('express')

const app = express();


app.get('/', (req, res) => res.json('Hi there'))

app.listen(process.env.PORT || 4000, ()=> console.log('...is runiing'))