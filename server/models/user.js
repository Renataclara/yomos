'use strict'

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/yomos');

var userSchema = mongoose.Schema({
    usename: String,
    password: String,
    salt: String
})

var userModel = mongoose.model('Books', userSchema);


module.exports = {
    userModel
}