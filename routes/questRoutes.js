const express = require('express');
const router = express.Router();
const { getAllQuests, completeQuest } = require('../controllers/questController');
router.get('/', getAllQuests);
router.post('/:id/complete', completeQuest);
module.exports = router;