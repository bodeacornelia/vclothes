'use strict'

const express = require('express');
const router = express.Router();
const controller = require('./ListPhotoController');

router.route('/')
  .get(controller.listAllPhotos);

module.exports = router;