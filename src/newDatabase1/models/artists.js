const mongoose = require('mongoose');
const Promise = require('bluebird');
const mongoDb = require('../connection.js');


const artistsdbSchema = mongoose.Schema({
  _id: String,
  name: String,
  bio: String,
  image: String,
  artist_id: Number,
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
      artist_id: id,
    };
    artists.findOne(query1, (err, data) => {
      if (err) {
        reject(err);
      } else {
        console.log('data in server: ', data);
        resolve(data);
      }
    });
  });
};

const testFunc = () => {
  artists.findOne({
    artist_id: 1,
  })
    .then((data) => console.log('data from func ', data)) // user can be undefined
    .catch((err) => console.log(err));
};

// Export function to create "reviews" model class
module.exports = {
  artists, getAllArtists, artistsdbSchema, getArtists, testFunc,
};
