const { Pool } = require('pg');

const pool = new Pool({
  database: 'rel-artists',
});

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback),
};

CREATE TABLE Artists(
  id int not null,
  artistName text not null,
  bio text not null,
  avatar text not null,
 );

 CREATE TABLE RelatedArtists(
  id serial PRIMARY KEY not NULL,
  artistIds int [],
 );

 


//  _id: String,
//   name: String,
//   bio: String,
//   image: String,
//   artistId: Number,
//   relatedArtists: Array,