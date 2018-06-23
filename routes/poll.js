const express = require('express');

const router = express.Router();

router.get('/vote', (req,res) => {
    res.send('hey vote please');
})