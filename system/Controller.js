const auth = require('../libs/auth');
const DBGateway = require("../DBGateway");
const gateway = new DBGateway('users');

class Controller {

  authenticate() {
    return function (req, res, next) {
      const token = req.headers['x-access-token'];
      if (!token) {
        return res.status(401)
          .send({ auth: false, message: 'No token provided.' });
      }

      auth.verifyJWTToken(token).then(function (response) {
        console.log("Hmasetttererr===: ", response.data.id);
        gateway.getById(response.data.id, function (err, user) {
          if (err) {
            return res.status(500).send("There was a problem finding the user.");
          }
          if (!user) {
            return res.status(404).send("No user found.");
          }

          next();
        });

      });
    }
  }
}

module.exports = Controller;