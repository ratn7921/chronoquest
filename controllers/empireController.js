// empireController.js
const Empire = require('../models/Empire');
exports.getEmpiresByYear = async (req, res) => {
  try {
    const year = parseInt(req.params.year);
    const empires = await Empire.find({ startYear: { $lte: year }, endYear: { $gte: year } });
    res.json(empires);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};