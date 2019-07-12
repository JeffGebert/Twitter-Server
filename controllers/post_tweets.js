const db_tweets = require('../models/tweets')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {



	let token = req.headers.authorization.split(' ')[1]
	jwt.verify(token, process.env.SECRET, (err, decoded) => {
		if (decoded) {

			req.body.author = decoded._id
			db_tweets.create(req.body).then((data) => {
				db_tweets.findById(data._id).populate({
					path:'author',
					select:'name'
				}).then((tweets)=> {
					res.send(tweets)
				}).catch((err) => {
					res.send(err)
				})
			}).catch((err) => {
				res.send(err)
			})
		}
	})
}
