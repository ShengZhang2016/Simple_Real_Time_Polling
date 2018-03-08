/*
* @Author: zhangsheng
* @Date:   2018-03-07 11:46:17
* @Last Modified by:   zhangsheng
* @Last Modified time: 2018-03-07 11:51:59
*/

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const voteSchema = new Schema({
	os: {
		type: String,
		required: true
	},
	points: {
		type: String,
		required: true
	}
});

// create collection and add schema
const Vote = mongoose.model('Vote', voteSchema);

module.exports = Vote;