const model = require('../models/relatedArtists.js');
const faker = require('faker');

let idCounter = 10000001;

module.exports = {
  // get artists by id from db
  getArtistById: (req, res) => {
    const artistId = req.query.artistId;
    if (artistId === undefined) {
      res.status(400).json({
        message: 'Bad request - must include artistId',
      });
    } else {
      model.getArtistById(artistId)
        .then((artist) => {
          res.status(200).json({
            message: 'Successfully retrieved artist',
            artist: artist.rows,
          });
        })
        .catch((err) => res.status(400).json({
          message: 'Failed to find artist',
          error: err,
        }));
    }
  },
  // gets artists by ids in related artists table
  getArtistsById: (req, res) => {
    const artistId = req.query.id;

    if (artistId === undefined) {
      res.status(400).json({
        message: 'Bad request - must include artistId',
      });
    } else {
      model.getArtistsById(artistId)
        .then((data) => res.json({
          message: 'Success retrieving artists',
          relatedArtists: data.rows,
        }))
        .catch((err) => res.status(400).json({
          message: 'Failed to find related artists',
          error: err,
        }));
    }
  },

  addNewArtist: (req, res) => {
    let newArtist = { artistName: req.body };
    newArtist.artistId = idCounter;
    newArtist = faker.internet.userName();
    newArtist.bio = 'Artist';
    newArtist.avatar = faker.image.avatar();
    if (newArtist !== undefined) {
      model.addNewArtist(newArtist);
      idCounter += 1;
    } else {
      res.status(400).json({
        message: 'Bad request - must include artistName',
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
