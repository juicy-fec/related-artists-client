const router = require('express').Router();
const relatedArtistControllers = require('../controllers/pgControllers.js');

router.get('/', relatedArtistControllers.getArtistById);

router.get('/', relatedArtistControllers.getArtistsByIds);

router.post('/', relatedArtistControllers.addNewArtist);

router.delete('/', relatedArtistControllers.deleteArtistById);

router.put('/', relatedArtistControllers.updateArtistById);

module.exports = router;
