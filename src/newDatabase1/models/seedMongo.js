const mongoose = require('mongoose');
const Promise = require('bluebird');
const mongoDb = require('../connection.js');
const { artistsdbSchema, artists } = require('./artists');


const getSomeArtist = (num) => {
  return artists.find({}).limit(num)
    .then((data) => data)
    .catch((err) => console.log(err));
};

const seedMongo = () => {
  // create random number between 1 - 30
  const random = Math.floor(Math.random() * Math.floor(30));
  // this needs called with random number
  const someArtists = getSomeArtist(random);
  // then use save as iterating over 10 million
  for (let i = 0; i < 1; i += 1) {
    // run find on each
    let document = artists.findOne({ artistId: i });
    // run save on each i as artistId
    console.log(document);
  }

  // console.log(oneArtist);
};

module.exports = { seedMongo };

// artist.updateMany({}, { $set: { name: 'foo' } });
