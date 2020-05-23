const mongoose = require('mongoose');
const Promise = require('bluebird');
const mongoDb = require('../connection.js');


const artistsdbSchema = mongoose.Schema({
  _id: String,
  name: String,
  bio: String,
  image: String,
  artistId: Number,
  relatedArtists: Array,
});

// create model for reviews
const artists = mongoose.model('artists', artistsdbSchema, 'artists');

//gets numbers of artists
const getSomeArtists = (num) => {
  return artists.find({}).limit(num);
};

//tests database call from server
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

// seeds doc with array of docs and return array of docs to server 
const seedMongo = (id) => {
  // create random number between 3 - 34
  const random = Math.floor(Math.random() * Math.floor(30)) + 4;
  // grabs single doc based on id from db
  // const document = artists.findOne({ artistId: id });
  // grabs group of artists from db based on random number
  const someArtists = getSomeArtists(random);
  // run save on document updating related artists
  return Promise.all([document, someArtists])
    .then(([artistArr]) => {
      const newdoc = artists.findOneAndUpdate(
        { artistId: id },
        { relatedArtists: artistArr },
        // If `new` isn't true, `findOneAndUpdate()` will return the
        // document as it was _before_ it was updated.
        { new: true },
      );
      // console.log('artists ', artistArr);
      return newdoc;
    });
};

// Export function to create "reviews" model class
module.exports = {
  artists, artistsdbSchema, getArtist, dbLogger, seedMongo,
};
