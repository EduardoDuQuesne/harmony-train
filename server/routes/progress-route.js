const { Router } = require('express');
const router = Router();

const { getProgress } = require('../controllers/progressCtrl');

router.get("/server/progress/:type", getProgress);

module.exports = router;