'use strict'

const auth = require('./auth');
const user = require('./user');
const photo = require('./photo');
const appointment = require('./appointment');

module.exports.init = init;

const envConfig = (env) => ({
  apiUrl: env.API_BASE
});

function init(app) {
  const config = envConfig(process.env);
  const { apiUrl } = config;

  app.set('apiBase', apiUrl);

  auth.init(app);
  user.init(app);
  photo.init(app);
  appointment.init(app);

  return app;
}