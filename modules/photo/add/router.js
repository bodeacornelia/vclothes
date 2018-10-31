'use strict'

const express = require('express');
const router = express.Router();
const controller = require('./AddPhotoController')

router.post('/photos.add',
  controller.addPhoto);

module.exports = router;