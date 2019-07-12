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


app.post('/api/signup', require('./controllers/post_users'))
app.get('/api/signup', require('./controllers/get_users'))

app.post('/api/hashtags', require('./controllers/post_hashtags'))
app.get('/api/hashtags', require('./controllers/get_hashtags'))


app.post('/api/tweets', require('./controllers/post_tweets'))
app.get('/api/tweets', require('./controllers/get_tweets'))

app.get('/api/login', require('./controllers/login'))


app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
})
