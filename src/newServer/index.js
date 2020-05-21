const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/../../public')));
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// get request for artists
app.get('/rel-artists', (req, res) => res.send('Hello World!'));

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

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
