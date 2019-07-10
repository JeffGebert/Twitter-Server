// Config

const express = require('express')
const path = require('path')
require('dotenv').config()
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())




require('./db')




app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
})
