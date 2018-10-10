'use strict'

var express = require('express');
var router = express.Router();
var controller = require('./AddUserController');

router.route('/')
  .post(controller.createUser);

module.exports = router;