const express = require('express');
const router = express.Router();
const { getEventsByYear } = require('../controllers/eventController');
router.get('/:year', getEventsByYear);
module.exports = router;