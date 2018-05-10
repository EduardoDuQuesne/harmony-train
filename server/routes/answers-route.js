const { Router } = require('express');
const router = Router();

const { storeAnswers } = require('../controllers/answerCtrl');

router.post("/server/answers", storeAnswers);

module.exports = router;