const mongoose = require('mongoose')

var pubSchema = new mongoose.Schema({
    type: String,
    id: String,
    authors: [String],
    title: String,
    booktitle: String,
    adress: String,
    year: String,
    month: String,
    doi: String,
    genres: [String]

});

module.exports = mongoose.model('pubs', pubSchema);