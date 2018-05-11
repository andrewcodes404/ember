const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({

    name : String,
    diet : String
});

module.exports = mongoose.model('Animal', animalSchema);
