'use strict'

const TABLE_NAME = require('../constants');
const DBGateway = require("../../../DBGateway");
const gateway = new DBGateway(TABLE_NAME);

exports.addAppointment = function (req, res) {
  if (!req.body) {
    res.send('Object appointment is empty');
  } else {
    gateway.create(req.body, function (err, result) {
      if (err)
        res.send(err);
      res.send(result);
    })
  }
}