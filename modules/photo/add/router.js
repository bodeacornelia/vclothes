'use strict'

const express = require('express');
const router = express.Router();
const controller = require('./AddPhotoController')

router.route('/')
  .post(controller.addPhoto);

module.exports = router;