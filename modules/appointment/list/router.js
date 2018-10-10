'use strict'

const express = require('express');
const router = express.Router();
const controller = require('./ListAppointmentsController');

router.route('/')
  .get(controller.listAllAppointments);

module.exports = router;