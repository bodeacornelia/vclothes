'use strict'

const Auth = require('./Auth');
const BearerStrategyProvider = require('./strategies/BearerStrategyProvider');
const LocalStrategyProvider = require('./strategies/LocalStrategyProvider');

let instance;

module.exports = AuthProvider;

function AuthProvider() {
  if (!instance) {
    instance = new Auth();
    instance.registerStrategy('bearer', BearerStrategyProvider());
    instance.registerStrategy('local', LocalStrategyProvider());
  }

  return instance;
}