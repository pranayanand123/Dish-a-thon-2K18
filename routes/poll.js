const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
    res.render('poll');
});


module.exports = router;