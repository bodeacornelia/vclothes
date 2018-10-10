'use strict'

const express = require('express');
const router = express.Router();
const controller = require('./ListUsersController');

router.route('/')
  .get(controller.listAllUsers);

module.exports = router;