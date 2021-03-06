'use strict'

const list = require('./list');
const details = require('./details');

module.exports.init = init;

function init(app) {
  const BASE_URL = app.get('apiBase');
  app.use(BASE_URL ,details);
  app.use(BASE_URL ,list);

  return app;
}