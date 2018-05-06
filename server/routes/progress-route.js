const { Router } = require('express');
const router = Router();

const { getProgress } = require('../controllers/progressCtrl');

router.get("/server/progress", getProgress);

module.exports = router;