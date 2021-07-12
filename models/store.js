const { Schema, model } = require('mongoose');

const storeSchema = new Schema({
    name: { type: String, required: true },
    url: { type: String, required: true },
    summary: { type: String, required: true },
    // Display # of people in Queue
    queue: { type: Number, required: true}
});

module.exports = model('Store', postSchema);