const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/db1', { useMongoClient: true });

const db1 = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db1.on('error', console.error.bind(console, 'MongoDB connection error:'));

db1.on('connected', () => console.log('connected'));


// export db everytime
module.exports = { db1 };
