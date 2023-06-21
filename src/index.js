const express = require('express')
const appp = require("./index")

const app = express()

app.use('/', appp)

app.listen(3000, console.log(`Server running in ${process.env.NODE_ENV} model on ${Port}`))