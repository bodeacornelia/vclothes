'use strict'

var express = require('express');
var router = express.Router();
var RegisterController = require('./RegisterController');
const controller = new RegisterController();

router.post('/users.add',
  controller.createUser()
);

module.exports = router;