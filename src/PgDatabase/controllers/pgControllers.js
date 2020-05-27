const model = require('../models/relatedArtists.js');

module.exports = {
  // get artists by id from db
  getArtistById: (req, res) => {

  },
  // gets artists by ids in related artists array
  getArtistsByIds: (req, res) => {

  },

  addNewArtist: (req, res) => {
    const { artistName, avatar } = req.body;
    if (artistName !== undefined && avatar !== undefined) {
      model.addNewArtist(artistName, avatar);
    } else {
      res.status(400).json({
        message: 'Bad request - must include artistName and avatar',
      });
    }
  },

  deleteArtistById: (req, res) => {
    const { artistId } = req.query;

    if (artistId !== undefined) {
      model.deleteArtistById(artistId)
        .then(() => res.status(200).json({
          message: 'Successfully deleted artist',
        }))
        .catch((err) => res.status(400).json({
          message: 'Failed to delete artist',
          error: err,
        }));
    } else {
      res.statu(400).json({
        message: 'Bad request - must include an artistId',
      });
    }
  },

  updateArtistById: (req, res) => {
    const { artistId, artistName, avatar } = req.body;

    if (artistId && artistName && avatar) {
      model.updateArtistById({ artistId, artistName, avatar })
        .then(() => res.status(200).json({
          message: 'Successfully updated artist',
        }))
        .catch((err) => res.status(400).json({
          message: 'Failed to update artist',
          error: err,
        }));
    } else {
      res.status(400).json({
        message: 'Bad request - must include artistId, artistName, and avatar',
      });
    }
  },

};
