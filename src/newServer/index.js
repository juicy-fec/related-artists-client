const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const Router = require('../PgDatabase/router/index.js');

// import database connection
const mongoDb = require('../newDatabase1/connection.js');

// const { seedMongo, getArtist, dbLogger } = require('../newDatabase1/models/artists');

const app = express();

const PORT = process.env.PORT || 3030;

app.use(express.static(path.join(__dirname, '/../../public')));
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// get request for  related artists group return array of artists
// app.get('/data/rel-artists/', (req, res) => {
//   seedMongo(req.query.id)
//   // res.send('got data: ');
//     .then((data) => res.json(data))
//     .catch((error) => res.json(error));
// });


// // get request for one artist
// app.get('/data/artist/', (req, res) => {
//   dbLogger();

//   getArtist(req.query.id)
//     .then((data) => console.log(data))
//     .catch((error) => res.json(error));

//   // const userid = req.query.id;
//   // getArtists(userid).then((data) => {
//   // res.json(data);
//   // });
// });

// app.get('/icon', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../public/playicon.png'));
// });

// // post
// app.post('/rel-artists', (req, res) => {
//   res.send('Got a POST request');
// });

// // Put request
// app.put('/rel-artists', (req, res) => {
//   res.send('Got a PUT request at /user');
// });
// // Delete request
// app.delete('/rel-artists', (req, res) => {
//   res.send('Got a DELETE request at /user');
// });

// app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));

app.use('/data/rel-Artist', Router);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
