/* Mongoose Connection */
const mongoose = require('mongoose');
const assert = require('assert');
const store = require('../models/store');

const url = 'mongodb://localhost/chill-db';
mongoose.connect(
    url,
    {
        useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindandModity: false,
    },
    (err) => {
        assert.equal(null, err);
        console.log("Connected successfully to database");

        // db.close(); turn on for testing
    }
);

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection Error:'));
mongoose.set('debug', true);

// NOTE: Use this to reset database
// store.deleteMany({}, function(err) { 
//     console.log('collection removed') 
//  });

module.exports = mongoose.connection;