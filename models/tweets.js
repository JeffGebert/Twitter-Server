const db = require('../db')
const mongoose = require('mongoose')

const db_tweets = db.model('tweets',{

	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref:'user',
		required: [true, 'Hashtag Channel is required']
	},
	date: {
		type: Date,
		default: Date.now()
	},
	body: {
		 type:String,
		 required: [true, 'Hashtag Channel is required']
	},
	hashtags:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'hashtags',
		required: [true, 'Hashtag Channel is required']
	}

})


module.exports = db_tweets
