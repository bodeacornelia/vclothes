'use strict'
const Controller = require('../../../system/Controller');

class AuthController extends Controller {
  constructor() {
    super();
  }

  login() {
    return function (req, res, next) {
      return res.status(200).json(req.user);
    }
  };
}

module.exports = AuthController;