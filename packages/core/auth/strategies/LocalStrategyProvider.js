const LocalStrategy = require('passport-local').Strategy;
const UserIdentityServiceProvider = require('../../userIdentity/UserIdentityServiceProvider');

module.exports = LocalStrategyProvider;

function LocalStrategyProvider() {
  const userIdentityService = UserIdentityServiceProvider();

  return new LocalStrategy(function (username, password, done) {
    userIdentityService.authenticateByCredentials(username, password, (err, result) => {
      if (err) {
        return done(err);
      }
      if (!result) {
        return done(null, false);
      }

      return done(null, result);
    })
  })
}
