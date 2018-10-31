'use strict'

var express = require('express');
var router = express.Router();
var controller = require('./AddUserController');

router.post('/users.add',
  controller.createUser);

module.exports = router;