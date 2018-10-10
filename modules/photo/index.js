'use strict'

const express = require('express');
const router = express.Router();

const list = require('./list');
const add = require('./add');

router.use('/photos' ,list);
router.use('/photos.add' ,add);

module.exports = router;