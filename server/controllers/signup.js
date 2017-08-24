const users = require('../models/users');

exports.signup = (req, res) => {
  users.userModel.create({
      username: req.body.username,
      password: req.body.password,
    })
    .then(data => {
      res.send(data)
    })
}