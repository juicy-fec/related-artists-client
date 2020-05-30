const fs = require('fs');

const writeRelArtists = fs.createWriteStream('relatedArtists.csv');
writeRelArtists.write('artistId,artistId2\n', 'utf8');

function writeUsers(relatedstream, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      let data = '';
      const random = Math.ceil(Math.random() * 30);
      for (let j = 0; j < random; j += 1) {
        const artistId = id;
        const artistId2 = Math.ceil(Math.random() * 10000000) + 1;
        data = `${artistId},${artistId2}\n`;
        relatedstream.write(data, encoding);
      }
      if (i === 0) {
        relatedstream.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = relatedstream.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      relatedstream.once('drain', write);
    }
  }
  write();
}

writeUsers(writeRelArtists, 'utf-8', () => {
  writeRelArtists.end();
});
