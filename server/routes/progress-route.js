const { Router } = require('express');
const router = Router();
const { getProgressByKey, getProgressByRoot, getTotalScore } = require('../controllers/progressCtrl');

router.get("/server/progress/:type", getProgressByKey);
router.get("/server/progress/root_stats/:keyType", getProgressByRoot);
router.get("/server/progress/overview/total", getTotalScore);

module.exports = router;