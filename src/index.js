const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

// Simple Usage (Enable All CORS Requests) - localhost - blocked by CORS policy
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./controllers/auth')(app);
require('./controllers/project')(app);

app.listen(3000)