'use strict'

var express = require('express');
var router = express.Router();
var AuthController = require('./AuthController');
var controller = new AuthController();

router.post(
  '/login',
  controller.localAuthenticate(),
  controller.login()
)

module.exports = router;