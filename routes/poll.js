const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Vote = require('../models/Vote');



router.get('/', (req, res) => {
   res.render('poll');
    
 });
 var points = 0;
 router.post('/', (req,res) => { 
  Vote.update({
    movie:req.body.movie},
   { $inc: {points:1}}
   )
   .then(() => {
     res.redirect('exit');
   });
});
  
   

module.exports = router;