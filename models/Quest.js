const mongoose = require('mongoose');

const questSchema = new mongoose.Schema({
  question: String,
  targetRegion: String,
  era: Number,
  points: Number
});

module.exports = mongoose.model('Quest', questSchema);
