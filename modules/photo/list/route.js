'use strict'

const express = require('express');
const router = express.Router();
const controller = require('./ListPhotoController');

router.get('/photos',
  controller.listAllPhotos);

module.exports = router;