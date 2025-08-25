// questController.js
const Quest = require('../models/Quest');
exports.getAllQuests = async (req, res) => {
  try {
    const quests = await Quest.find();
    res.json(quests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.completeQuest = async (req, res) => {
  // Placeholder: Add user quest tracking logic later
  res.json({ message: `Quest ${req.params.id} marked complete` });
};