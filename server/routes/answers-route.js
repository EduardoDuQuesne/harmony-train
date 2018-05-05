const { Router } = require('express');
const router = Router();

const { getKeyId } = require('../controllers/answerCtrl');

router.post("/server/answers", getKeyId);

module.exports = router;