'use strict'

var express = require('express');
var router = express.Router();
var controller = require('./AuthController');

router.route('/')
  .post(controller.login);

module.exports = router;