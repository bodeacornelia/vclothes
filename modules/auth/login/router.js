'use strict'

var express = require('express');
var router = express.Router();
var LoginController = require('./LoginController');
var controller = new LoginController();

router.post(
  '/login',
  controller.localAuthenticate(),
  controller.login()
)

module.exports = router;