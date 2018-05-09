const { Router } = require('express');
const router = Router();

const { getProgressByKey } = require('../controllers/progressCtrl');

router.get("/server/progress/:type", getProgressByKey);

module.exports = router;