'use strict'

const express = require('express');
const router = express.Router();
const controller = require('./AddAppointmentController');

router.post('/appointments.add',
  controller.addAppointment);

module.exports = router;