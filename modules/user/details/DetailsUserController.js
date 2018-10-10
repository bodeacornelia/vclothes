'use strict'

const TABLE_NAME = require('../constants');
const DBGateway = require("../../../DBGateway");
const gateway = new DBGateway(TABLE_NAME);

exports.listUserDetails = function(req, res) {
    gateway.getById(req.params.userId, function(err, result) {
        if(err)
          res.send(err);
        res.send(result);
    })
}