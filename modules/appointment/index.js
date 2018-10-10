'use strict'

const express = require('express');
const router = express.Router();

const add = require('./add');
const list = require('./list');

router.use('/appointments.add', add);
router.use('/appointments', list);

module.exports = router;