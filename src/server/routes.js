const express = require('express');
const router = express.Router();

const weather = require('./weather')
const alert = require('./alert')

router.use('/', weather);
router.use('/', alert);

module.exports = router;