const mongoose = require('mongoose');
const Promise = require('bluebird');
const mongoDb = require('../connection.js');


const artistsdbSchema = mongoose.Schema({
  _id: String,
  name: String,
  bio: String,
  image: String,
  artistiId: Number,
});

// create model for reviews
const artists = mongoose.model('artists', artistsdbSchema, 'artists');

const getAllArtists = (callback, obj) => {
  artists.find(obj, (err, docs) => {
    if (err) {
      console.log('Error: ', err);
    } else {
      console.log('document: ');
      callback(null, docs);
    }
  });
};

const getArtists = (id) => {
  return new Promise((resolve, reject) => {
    // const query = artists.where({ _id: id });
    const query1 = {
      artistId: id,
    };
    artists.findOne(query1, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const dbLogger = () => {
  artists.findOne({ artistId: 3000 }).explain('executionStats')
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

const testFunc = (id) => {
  return artists.findOne({ artistId: parseInt(id) })
    .then((data) => data)
    .catch((err) => console.log(err));
};

// Export function to create "reviews" model class
module.exports = {
  artists, getAllArtists, artistsdbSchema, getArtists, testFunc, dbLogger,
};
