const mongoose = require('mongoose');


var filmeSchema = new mongoose.Schema({
    _id: String,
    title: String,
    year: String,
    cast: [String],
    genre: [String]
});

module.exports = mongoose.model('filme', filmeSchema);