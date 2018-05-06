'use strict';
const { Router } = require('express');
const router = Router();

router.use(require('./auth-route'));
router.use(require('./answers-route'));
router.use(require('./progress-route'));

module.exports = router;
