import pgdb from '../pgconnection.js';


module.exports = {
  getArtistById: (artistId) => {
    const sqlString = 'SELECT * FROM rel-artists WHERE artist_id = $1';

    return pgdb.query(sqlString, [artistId]);
  },

  addNewArtist: (artistName, avatar) => {
    const sqlString = 'INSERT INTO rel-artists(artist_id, avatar) VALUES ($1, $2)';

    return pgdb.query(sqlString, [artistName, avatar]);
  },

  deleteArtistById: (artistId) => {
    const sqlString = 'DELETE FROM rel-artists WHERE artist_id = $1';

    return pgdb.query(sqlString, [artistId]);
  },

  updateArtistById: ({ artistId, artistName, avatar }) => {
    const sqlString = 'UPDATE rel-artists SET artist_name = $2, avatar = $3 WHERE artist_id = $1';

    return pgdb.query(sqlString, [artistId, artistName, avatar]);
  },


};
