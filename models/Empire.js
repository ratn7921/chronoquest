const mongoose = require('mongoose');

const empireSchema = new mongoose.Schema({
  name: String,
  startYear: Number,
  endYear: Number,
  capital: String,
  ruler: String,
  geoBoundary: Object // Store GeoJSON
});

module.exports = mongoose.model('Empire', empireSchema);
