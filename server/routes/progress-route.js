const { Router } = require('express');
const router = Router();
const { getProgressByKey, getProgressByRoot } = require('../controllers/progressCtrl');

router.get("/server/progress/:type", getProgressByKey);
router.get("/server/progress/root_stats/:keyType", getProgressByRoot);

module.exports = router;