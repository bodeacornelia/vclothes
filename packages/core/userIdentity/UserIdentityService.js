'use strict'

const auth = require('../../../libs/auth');
const DBGateway = require('../../../DBGateway');
const gateway = new DBGateway('users');
const bcrypt = require('bcrypt');

class UserIdentityService {

  authenticateByAccessToken(token, callback) {
    auth.verifyJWTToken(token).then(function (response) {
      gateway.getById(response.data.id, function (err, user) {
        if (err) {
          callback(err, null);
        }
        if (!user) {
          callback(err, null);
        }

        callback(null, user);
      });

    });
  }

  authenticateByCredentials(email, password, callback) {
    gateway.getByEmailAddress(email, function (err, result) {
      if (err) {
        callback(err);
      } else {
        const user = result[0];
        bcrypt.compare(password, user.password, function (err, result) {
          if (err) {
            callback(err);
          }

          if (!result) {
            callback(null, false);
          }

          callback(null, {
            success: 'true',
            token: auth.createJWToken({
              sessionData: user,
              maxAge: 3600
            })
          })
        });
      }
    });
  }
}

module.exports = UserIdentityService;