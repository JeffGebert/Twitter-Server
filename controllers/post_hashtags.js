
const db_hashtags = require('../models/hashtags')

module.exports = (req, res) => {
	db_hashtags.create(req.body).then((data) => {
		res.send(data)
	}).catch((err) => {
		res.send(err)
	})
}
