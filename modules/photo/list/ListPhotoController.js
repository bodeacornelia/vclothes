'use strict'

const TABLE_NAME = require('../constants');
const DBGateway = require("../../../DBGateway");
const gateway = new DBGateway(TABLE_NAME);

exports.listAllPhotos = function (req, res) {
  gateway.getAll(function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
}