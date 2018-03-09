/*
* @Author: zhangsheng
* @Date:   2018-03-07 02:18:15
* @Last Modified by:   zhangsheng
* @Last Modified time: 2018-03-08 22:59:06
*/

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Vote = require('../models/Vote');

const Pusher = require('pusher');

var pusher = new Pusher({
  appId: '',
  key: '',
  secret: '',
  cluster: 'us2',
  encrypted: true
});

router.get('/', (req, res) => {
	// res.send('Poll');
	Vote.find().then(votes => res.json({success: true, votes: votes}));
});

router.post('/', (req,res) => {
	const newVote = {
		os: req.body.os,
		points: 1
	}

	new Vote(newVote).save().then(vote => {

		pusher.trigger('os-poll', 'os-vote', {
			points:parseInt(vote.points),
			os:vote.os
		});
		return res.json({success: true, message: 'Thanks for voting'});

	});
});

module.exports = router;