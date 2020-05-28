import pgdb from '../pgconnection';


module.exports = {
  getArtistById: (artistId) => {
    const sqlString = 'SELECT * FROM Artists WHERE artistId = $1';

    return pgdb.query(sqlString, [artistId]);
  },
  getArtistsById: (artistId) => {
    const sqlString = '';

    return pgdb.query(sqlString, [artistId]);
  },

  addNewArtist: (newArtist) => {
    const sqlString = 'INSERT INTO Artists(newArtist) VALUES ($1)';

    return pgdb.query(sqlString, [newArtist]);
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
