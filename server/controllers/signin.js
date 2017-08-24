const users = require('../models/users');
const jwt = require('jsonwebtoken');

exports.signin = (req, res) => {
  users.userModel.findOne({
      username: req.body.username,
      password: req.body.password
    })
    .then(data => {
      var token = jwt.sign({
        username: data.username
      }, process.env.YOMOS_SECRET);
      res.send(token)
    })
    .catch(err => {
      res.send(err)
    })
}