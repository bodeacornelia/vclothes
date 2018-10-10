'use strict'

const express = require('express');
const router = express.Router();
const controller = require('./AddAppointmentController');

router.route('/')
  .post(controller.addAppointment);

module.exports = router;