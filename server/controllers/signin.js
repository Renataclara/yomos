const users = require('../models/user');
const jwt = require('jsonwebtoken');
const random = require('../helpers/hash')
require('dotenv').config()

exports.signin = (req, res) => {
  users.userModel.findOne({
      username: req.body.username
    })
    .then(data => {
      pass = random.hashish(req.body.password, data.salt)
      if (pass == data.password) {
        var token = jwt.sign({
          username: data.username
        },'bebas');
        res.send(token)
      } else {
        res.send('wrong password')
      }
    })
    .catch(err => {
      res.send('Username Not Exist')
    })
}
