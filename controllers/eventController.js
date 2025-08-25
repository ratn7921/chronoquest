// eventController.js
const Event = require('../models/Event');
exports.getEventsByYear = async (req, res) => {
  try {
    const year = parseInt(req.params.year);
    const events = await Event.find({ date: year });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
