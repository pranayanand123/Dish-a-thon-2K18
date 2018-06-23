const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const cors = require('cors');
const path = require('path');

const app = express();

require('./models/Vote');
const poll = require('./routes/poll');

mongoose.Promise = global.Promise;
// Mongoose Connect
mongoose.connect('mongodb://harshit:scooby1234@ds257077.mlab.com:57077/social-dev')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


  app.engine('handlebars', exphbs({
    defaultLayout:'main'
  }));
  app.set('view engine', 'handlebars');

  // Set public folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Enable CORS
app.use(cors());


app.use('/', poll);

port = 5000;

app.listen(port, () => {
    console.log(`server started on port ${port}`);
})
