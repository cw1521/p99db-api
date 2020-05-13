const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const continentsSchema = new mongoose.Schema({
    id: Number,
    name: String,
    img_link: String
}, {collection: "continents"});


var continentModel = mongoose.model('continents', continentsSchema);

module.exports = continentModel;
