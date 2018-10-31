'use strict'

const express = require('express');
const router = express.Router();
const controller = require('./ListAppointmentsController');

router.get('/appointments',
  controller.listAllAppointments);

module.exports = router;