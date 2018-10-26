'use strict'

const bcrypt = require('bcrypt');

const TABLE_NAME = require('../constants');
const DBGateway = require("../../../DBGateway");
const gateway = new DBGateway(TABLE_NAME);

exports.createUser = function (req, res) {
  var newUser = req.body;

  bcrypt.hash(newUser.password, 10, function (err, hash) {
    if (!newUser) {
      res.status(400).send({
        error: true, message: 'Please provide user'
      });
    }
    else {
      newUser.password = hash
      gateway.create(newUser, function (err, users) {
        if (err)
          res.send(err);
        res.json(users);
      });
    };
  });
};