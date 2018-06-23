const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');

const app = express();

const poll = require('./routes/poll')

mongoose.Promise = global.Promise;
// Mongoose Connect
mongoose.connect('mongodb://harshit:scooby1234@ds257077.mlab.com:57077/social-dev', {
  
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


  app.engine('handlebars', exphbs({
    defaultLayout:'main'
  }));
  app.set('view engine', 'handlebars');

app.use('/', poll);

port = 5000;

app.listen(port, () => {
    console.log(`server started on port ${port}`);
})
