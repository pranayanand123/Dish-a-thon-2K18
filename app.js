const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const cors = require('cors');
const path = require('path');
var cloudinary = require('cloudinary');
const app = express();

// var sightengine = require('sightengine')('1821125839', 'AjmSejyjEv5rVhYjYykW');

// sightengine.check(['nudity', 'wad', 'faces', 'face-attributes', 'celebrities']).video('https://sightengine.com/assets/stream/examples/funfair.mp4', 'https://localhost:5000/').then(function(result) {
//   console.log(result)
// }).catch(function(err) {
//   // handle the error
// });

cloudinary.config({ 
  cloud_name: 'dsluws85g', 
  api_key: '254539497132192', 
  api_secret: '7J0MX2U90fSr2-lwHcHjcBHsnLI' 
});

cloudinary.v2.uploader.upload('https://firebasestorage.googleapis.com/v0/b/loginapp-db171.appspot.com/o/Shirt%20STOLEN%20While%20Talking%20to%20College%20Girls%20(BEST%20PICKUP%20LINE%20EVER)2.mp4?alt=media&token=254e1eea-1430-4e2b-97ef-ff6af506c5ee', 
  { resource_type: "video" },
  function(error, result) {
  console.log(result);

  });


app.get('/ml',(req,res) => {
  var sightengine = require('sightengine')('1821125839', 'AjmSejyjEv5rVhYjYykW');
  sightengine.check(['nudity']).video_sync('https://firebasestorage.googleapis.com/v0/b/loginapp-db171.appspot.com/o/Shirt%20STOLEN%20While%20Talking%20to%20College%20Girls%20(BEST%20PICKUP%20LINE%20EVER)2.mp4?alt=media&token=254e1eea-1430-4e2b-97ef-ff6af506c5ee').then(function(result) {
  res.send(result) 
  for (var i = 0; i<result.data.frames.length; i++)
{
  if(result.data.frames[i].nudity.raw > 0.0)
  {
console.log(result.data.frames[i].nudity);
console.log(result.data.frames[i].info);
  }

}
  })

});

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

port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server started on port ${port}`);
})
