const express = require('express')
const restful = require('node-restful')
const mongoose = restful.mongoose
const server = express()
const bodyParser = require('body-parser')
const cors = require('cors')

// Database
mongoose.Promise = global.Promise // mongoose to use Promises api from node, because mongoose.Promise is deprecated
mongoose.connect('mongodb://db/mydb')

// Middlewares
server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use(cors())

// ODM
const Client = restful.model('Client', {
    name: {type: String, required: true}
})

// REST API
Client.methods(['get', 'post', 'put', 'delete'])
Client.updateOptions({new: true, runValidators: true})

// Routes
Client.register(server, '/clients')

// Start Server
server.listen(3000)
