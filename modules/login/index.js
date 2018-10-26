'use strict'

const express = require('express');
const router = express.Router();

const auth = require('./auth');

router.use('/login' ,auth);

module.exports = router;