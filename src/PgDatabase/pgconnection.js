const { Client } = require('pg');

const connectionString = 'postgres://postgres:postgres@localhost:5432/database';

const client = new Client({ connectionString });

client.connect();

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