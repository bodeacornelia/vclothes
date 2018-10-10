'use strict'

var express = require('express');
var router = express.Router();
var controller = require('./DetailsUserController');

router.route('/:userId')
  .get(controller.listUserDetails);

module.exports = router;