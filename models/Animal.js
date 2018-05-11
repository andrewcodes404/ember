const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({

    animal : String,
    diet : String
});

module.exports = mongoose.model('Animal', animalSchema);
