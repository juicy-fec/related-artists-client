import pgdb from '../pgconnection.js';


module.exports = {
  getArtistById: (artistId) => {
    const sqlString = 'SELECT * FROM Artists WHERE artistId = $1';

    return pgdb.query(sqlString, [artistId]);
  },
  getArtistsById: (artistId) => {
    const sqlString = '';

    return pgdb.query(sqlString, [artistId]);
  },

  addNewArtist: (artistName, avatar) => {
    const sqlString = 'INSERT INTO Artists(artistId, avatar) VALUES ($1, $2)';

    return pgdb.query(sqlString, [artistName, avatar]);
  },

  deleteArtistById: (artistId) => {
    const sqlString = 'DELETE FROM Artists WHERE artistId = $1';

    return pgdb.query(sqlString, [artistId]);
  },

  updateArtistById: ({ artistId, artistName, avatar }) => {
    const sqlString = 'UPDATE Artists SET artistName = $2, avatar = $3 WHERE artistId = $1';

    return pgdb.query(sqlString, [artistId, artistName, avatar]);
  },


};
