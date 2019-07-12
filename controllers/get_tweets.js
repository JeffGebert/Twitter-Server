const db_tweets = require('../models/tweets')

module.exports = (req, res) => {
	let q = {}
	if (req.query && req.query.hashtags) {
		q.hashtags = req.query.hashtags
	}
	db_tweets.find(q).sort('-date').populate({
		path: 'hashtags',
		select: 'name'
	}).populate({
		path: 'author',
		select: 'name email'
	}).then((data) => {
		res.send(data)
	}).catch((err) => {
		res.send(err)
	})
}
