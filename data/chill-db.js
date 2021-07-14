/* Mongoose Connection */
const mongoose = require('mongoose');
const assert = require('assert');

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

module.exports = mongoose.connection;