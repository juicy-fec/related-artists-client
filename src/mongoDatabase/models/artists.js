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

module.export = {
  // gets numbers of artists
  getSomeArtists: (num) => artists.find({}).limit(num),

  // tests database call from server
  dbLogger: () => {
    artists.findOne({ artistId: 3000 }).explain('executionStats')
      .then((data) => console.log('dblogger: ', data))
      .catch((err) => console.log(err));
  },

  getArtist: async (id) => {
    try {
      const data = await artists.findOne({ artistId: parseInt(id, 0) });
      return data;
    } catch (err) {
      return console.log(err);
    }
  },

  // seeds doc with array of docs and return array of docs to server
  seedMongo: async (id) => {
    // create random number between 3 - 34
    const random = Math.floor(Math.random() * Math.floor(30)) + 4;
    // grabs group of artists from db based on random number
    const someArtists = this.getSomeArtists(random);
    // run save on document updating related artists
    const [artistArr] = await Promise.all([someArtists]);
    const newdoc = artists.findOneAndUpdate({ artistId: id }, { relatedArtists: artistArr },
      // If `new` isn't true, `findOneAndUpdate()` will return the
      // document as it was _before_ it was updated.
      { new: true });
    // console.log('artists ', artistArr);
    return newdoc;
  },
};
