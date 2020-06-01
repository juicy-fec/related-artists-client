const faker = require('faker');
const path = require('path');
const models = require('../models/artists.js');

module.exports = {
  getRelatedArtists: (req, res) => {
    const artistId = req.query.artistId;

    if (artistId === undefined) {
      res.status(400).json({
        message: 'Bad request - must include artistId',
      });
    } else {
      models.seedMongo(artistId)
        .then((data) => res.json({
          message: 'Success retrieving artists',
          artists: data.relatedArtists,
        }))
        .catch((err) => res.status(400).json({
          message: 'Failed to find related artists',
          error: err,
        }));
    }
    // seedMongo(req.query.id)
    // // res.send('got data: ');
    //   .then((data) => res.json(data))
    //   .catch((error) => res.json(error));
  },

  // get request for one artist
  getArtist: (req, res) => {
    // models.getArtist(req.query.id)
    //   .then((data) => res.send(data))
    //   .catch((error) => res.json(error));
    const artistId = req.query.artistId;

    if (artistId === undefined) {
      res.status(400).json({
        message: 'Bad request - must include artistId',
      });
    } else {
      models.getArtist(artistId)
        .then((artist) => {
          res.status(200).json({
            message: 'Successfully retrieved artist',
            artist: artist,
          });
        })
        .catch((err) => res.status(400).json({
          message: 'Failed to find artist',
          error: err,
        }));
    }

    // models.getArtist(artistId)
    //   .then((artist) => {
    //     res.status(200).json({
    //       message: 'Successfully retrieved artist',
    //       artist: artist.rows,
    //     });
    //   })
    //   .catch((err) => res.status(400).json({
    //     message: 'Failed to find artist',
    //     error: err,
    //   }));
  },

  getImage: (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/playicon.png'));
  },
  // post
  postArtist: (req, res) => {
    res.send('Got a POST request');
  },

  // Delete request
  deleteArtist: (req, res) => {
    res.send('Got a DELETE request at /user');
  },
};
