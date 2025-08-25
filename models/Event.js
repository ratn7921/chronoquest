const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Number,
  location: [Number], // [longitude, latitude]
  empire: String
});

module.exports = mongoose.model('Event', eventSchema);
