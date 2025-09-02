const express = require('express');
const router = express.Router();
const healthController = require('../controllers/healthController');
const auth = require('../middleware/auth');

router.post('/log', auth, healthController.logHealthData);
router.get('/data', auth, healthController.getHealthData);
router.get('/trends', auth, healthController.getHealthTrends);

module.exports = router;


