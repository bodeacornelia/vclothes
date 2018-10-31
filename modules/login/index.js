'use strict'

const auth = require('./auth');

module.exports.init = init;

function init(app) {
  const BASE_URL = app.get('apiBase');
  app.use(BASE_URL, auth);

  return app;
}