const db_hashtags = require('../models/hashtags')


module.exports = (req, res) => {
	db_hashtags.find({}).then((data)=>{
		res.send(data)
	}).catch((err)=>{
		res.send(err)
	})
 }
