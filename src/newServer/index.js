const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

// import database connection
const mongoDb = require('../newDatabase1/connection.js');

const { getAllArtists, getArtists, testFunc, dbLogger } = require('../newDatabase1/models/artists');

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.static(path.join(__dirname, '/../../public')));
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// get request for artists
app.get('/rel-artists', (req, res) => res.send('Hello World!'));


// get request for one artist
app.get('/data/artist/', (req, res) => {
  console.log('i ran in server');
  // testFunc((err, results) => {
  //   if (err) {
  //     console.log('Error getting documents', err);
  //   } else {
  //     console.log('Success getting documents: ', results);
  //     res.send(results);
  //   }
  // }, req.query);
  testFunc(req.query.id)
    .then((data) => res.json(data))
    .catch((error) => res.json(error));

  // const userid = req.query.id;
  // getArtists(userid).then((data) => {
  // res.json(data);
  // });
});

// post
app.post('/rel-artists', (req, res) => {
  res.send('Got a POST request');
});

// Put request
app.put('/rel-artists', (req, res) => {
  res.send('Got a PUT request at /user');
});
// Delete request
app.delete('/rel-artists', (req, res) => {
  res.send('Got a DELETE request at /user');
});

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));
