'use strict'

const express = require('express');
const router = express.Router();
const ListUsersController = require('./ListUsersController');
const controller = new ListUsersController();

router.get('/users',
  controller.authenticate(),
  controller.listAllUsers(),
);

module.exports = router;