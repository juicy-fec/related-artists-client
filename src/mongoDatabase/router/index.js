const router = require('express').Router();
const mongoControllers = require('../controllers/mongoControllers');

router.get('/', mongoControllers.getArtist);

router.get('/icon', mongoControllers.getImage);

router.get('/related', mongoControllers.getRelatedArtists);

// router.post('/', mongoControllers.addNewArtist);

// router.delete('/', mongoControllers.deleteArtistById);

module.exports = router;
