'use strict'

const express = require('express');
const router = express.Router();

const add = require('./add');
const list = require('./list');
const details = require('./details');

router.use('/user' ,details);
router.use('/users' ,list);
router.use('/users.add' ,add);

module.exports = router;