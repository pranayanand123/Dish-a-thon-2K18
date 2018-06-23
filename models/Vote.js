const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Vote = new Schema({
    movie:{
        type:String,
        required:true
    },
     
    points: {
        type: Number
    }
});

module.exports=mongoose.model('vote', Vote);