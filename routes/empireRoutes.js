const express = require('express');
const router = express.Router();
const { getEmpiresByYear } = require('../controllers/empireController');
router.get('/:year', getEmpiresByYear);
module.exports = router;