const fs = require('fs');
const faker = require('faker');
// const { Aritst, artistSchema } = require('../models/artists.js');


const writeArtists = fs.createWriteStream('artists.csv');
writeArtists.write('artistId,artistName,avatar,bio\n', 'utf8');

function writeUsers(writer, encoding, callback) {
  let i = 50000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const artistName = faker.internet.userName();
      const avatar = faker.image.avatar();
      const bio = 'Artist';
      const data = `${id},${artistName},${avatar},${bio}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
}

writeUsers(writeArtists, 'utf-8', () => {
  writeArtists.end();
});
