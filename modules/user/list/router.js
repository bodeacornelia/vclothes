'use strict'

const express = require('express');
const router = express.Router();
const controller = require('./ListUsersController');

router.get('/users',
  controller.listAllUsers);

module.exports = router;