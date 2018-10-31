'use strict'

var express = require('express');
var router = express.Router();
var controller = require('./DetailsUserController');

router.get('/user/:userId',
  controller.listUserDetails);

module.exports = router;