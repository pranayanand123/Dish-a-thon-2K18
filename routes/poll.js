const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Vote = require('../models/Vote');

const Pusher = require('pusher');

const keys = require('../config/keys');

var pusher = new Pusher({
  appId: keys.pusherAppId,
  key: keys.pusherKey,
  secret: keys.pusherSecret,
  cluster: keys.pusherCluster,
  encrypted: keys.pusherEncrypted
});

router.get('/', (req, res) => {
  Vote.find().then(votes => res.json({ success: true, votes: votes }));
});

router.post('/', (req, res) => {
  const newVote = {
    movie: req.body.movie,
    points: 1
  };

  new Vote(newVote).save().then(vote => {
    pusher.trigger('movie-poll', 'movie-vote', {
      points: parseInt(vote.points),
      movie: vote.movie
    });

    return res.json({ success: true, message: 'Thank you for voting' });
  });
});

module.exports = router;