const { Schema, model } = require('mongoose');
const mongoose = require('mongoose')

const storeSchema = new Schema({
    name: { type: String, required: true },
    url: { type: String, required: true },
    summary: { type: String, required: true },
    // Display # of people in Queue
    queue: { type: Number, required: true}
});

// Example models

const Target = mongoose.model('Target', storeSchema);
const Best_Buy = mongoose.model('Best Buy', storeSchema);

module.exports = model('Store', storeSchema);