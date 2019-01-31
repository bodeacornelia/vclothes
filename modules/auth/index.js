'use strict'

const auth = require('./login');
const register = require('./register');

module.exports.init = init;

function init(app) {
  const BASE_URL = app.get('apiBase');
  app.use(BASE_URL, auth);
  app.use(BASE_URL, register);

  return app;
}