'use strict'

const TABLE_NAME = require('../constants');
const DBGateway = require("../../../DBGateway");
const gateway = new DBGateway(TABLE_NAME);

exports.createUser = function(req, res) {
    var newUser = req.body;

    if(!newUser) {
        res.status(400).send({
            error:true, message: 'Please provide user'
        });
    } else {
        gateway.create(newUser, function(err, users) {
            if(err)
                res.send(err);
            res.json(users);
        });
    }
    
};