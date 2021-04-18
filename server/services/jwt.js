'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'SECRET_JWT_KEY';

exports.createToken = function (user) {
  var payload = {
    sub: user._id,
    username: user.username,
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    image: user.image,
    created_at: moment().unix(),
    expiration: moment().add(30, 'days').unix
  }

  return jwt.encode(payload, secret);
}
