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

module.exports = {
  // gets numbers of artists
  getSomeArtists: async (num) => {
    try {
      const data = await artists.find().limit(num);
      return data;
    }
    catch (err) {
      return console.log(err);
    }
  },

  // tests database call from server
  // dbLogger: () => {
  //   artists.findOne({ artistId: 3000 }).explain('executionStats')
  //     .then((data) => console.log('dblogger: ', data))
  //     .catch((err) => console.log(err));

  getArtist: async (id) => {
    try {
      const data = await artists.findOne({ artistId: parseInt(id, 0) });
      return data;
    } catch (err) {
      return console.log(err);
    }
  },

  // seeds doc with array of docs and return array of docs to server
  seedMongo: (id) => {
    // create random number between 3 - 34
    const random = Math.floor(Math.random() * Math.floor(30)) + 4;
    // grabs single doc based on id from db
    // const document = artists.findOne({ artistId: id });
    // grabs group of artists from db based on random number
    const someArtists = module.exports.getSomeArtists(random);
    // run save on document updating related artists
    // console.log('artists:', someArtists);
    return Promise.all([someArtists])
      .then(([artistArr]) => {
        const newdoc = artists.findOneAndUpdate(
          { artistId: id },
          { relatedArtists: artistArr },
          // { useFindAndModify: false },
          // If `new` isn't true, `findOneAndUpdate()` will return the
          // document as it was _before_ it was updated.
          { new: true },
        );
        // console.log('artists ', artistArr);
        return newdoc;
      });
  },

};
