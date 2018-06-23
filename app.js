const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.Promise = global.Promise;
// Mongoose Connect
mongoose.connect('mongodb://harshit:scooby1234@ds257077.mlab.com:57077/social-dev', {
  
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.get('/', (req,res) => {
    res.send('hello world');
});



port = 5000;

app.listen(port, () => {
    console.log(`server started on port ${port}`);
})
