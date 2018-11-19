const passport = require('passport');
const auth = require('../libs/auth');
const DBGateway = require("../DBGateway");
const gateway = new DBGateway('users');
const BearerStrategy = require('passport-http-bearer').Strategy;

class Controller {

  authenticate() {
    return function (req, res, next) {
      return passport.authenticate('bearer', { session: false })(req, res, next);
    }
  }
}

module.exports = Controller;