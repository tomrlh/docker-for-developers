const express = require('express')
const restful = require('node-restful')
const mongoose = restful.mongoose
const server = express()

// Database
mongoose.Promise = global.Promise // mongoose to use Promises api from node, because mongoose.Promise is deprecated
mongoose.connect('mongodb://db/mydb')

server.get('/', (req, res, next) => res.send('Backend'))

// Start Server
server.listen(3000)
