const mongoose = require('mongoose');
const db = require('../connection.js');


const artistsSchema = mongoose.Schema({
  _id: String,
  name: String,
  bio: String,
  image: String,
  artist_id: Number,
});

// create model for reviews
const Artist = mongoose.model('Artist', artistsSchema);

const findDocuments = (callback, obj) => {
  Artist.find(obj, (err, docs) => {
    if (err) {
      console.log('Error: ', err);
    } else {
      console.log('document: ');
      callback(null, docs);
    }
  });
};

// Export function to create "reviews" model class
module.exports = { Artist, findDocuments, artistsSchema };
