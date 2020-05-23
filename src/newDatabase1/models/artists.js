const mongoose = require('mongoose');
const Promise = require('bluebird');
const mongoDb = require('../connection.js');


const artistsdbSchema = mongoose.Schema({
  _id: String,
  name: String,
  bio: String,
  image: String,
  artistId: Number,
  relatedArtist: Array,
});

// create model for reviews
const artists = mongoose.model('artists', artistsdbSchema, 'artists');

const getRelArtists = (callback, obj) => {
  artists.find(obj, (err, docs) => {
    if (err) {
      console.log('Error: ', err);
    } else {
      console.log('document: ');
      callback(null, docs);
    }
  }).limit(8);
};


const dbLogger = () => {
  artists.findOne({ artistId: 3000 }).explain('executionStats')
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

const getArtist = (id) => {
  return artists.findOne({ artistId: parseInt(id) })
    .then((data) => data)
    .catch((err) => console.log(err));
};

// Export function to create "reviews" model class
module.exports = {
  artists, getRelArtists, artistsdbSchema, getArtist, dbLogger,
};
