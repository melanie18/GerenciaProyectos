'use strict';

require('dotenv').config();

const bcrypt = require('bcrypt-nodejs');
const moment = require('moment');

const User = require('../models/user');
const jwt = require('../services/jwt');

function createUser(req, res) {
  let user = new User();
  let params = req.body;

  let dispatchSave = () => {
    user.name = !params.name ? '' : params.name;
    user.email = !params.email ? '' : params.email;
    user.created_at = moment().format('DD/MM/YYYY');
    user.last_login = '';
    user.updated_at = '';

    bcrypt.hash(params.password, null, null, (err, hash) => {
      if (err) {
        res.status(500).send({
          message: 'Something was wrong, please contact with the Administrator.',
          error: err
        })
      } else {
        user.password = hash;
        user.save((err, userStored) => {
          if (err) {
            res.status(500).send({
              message: 'Something was wrong, please contact with the Administrator.',
              error: err
            })
          } else {
            res.status(200).send({
              message: 'User registration successfully.'
            })
          }
        })
      }
    })
  }

  let validatorEmail = () => {
    User.findOne({
      email: params.email.toLowerCase()
    }, (err, userFound) => {
      if (err) {
        res.status(500).send({
          message: 'Something was wrong, please contact with the Administrator.',
          error: err
        })
      } else {
        if (!userFound) {
          dispatchSave();
        } else {
          res.status(500).send({
            message: 'This user is already registered.',
          })
        }
      }
    })
  }

  if (!params || !params.email || !params.password) {
    res.status(500).send({
      message: 'Email and password are required fields.'
    })
  } else {
    validatorEmail();
  }
}

function recoveryPassword(req, res) {
  const email = req.params.email;
  User.findOne({
    email: email
  }, (err, userFound) => {
    if (err) {
      res.status(500).send({
        message: 'Something was wrong, please contact with the Administrator.',
        error: err
      })
    } else {
      if (!userFound) {
        res.status(500).send({
          message: "We don't any registered user with this email."
        })
      } else {
        let host = '';
        if (process.env.ENVIRONMENT === 'develop') {
          host = 'http://localhost:4200';
        } else {
          host = req.hostname;
        }

        res.status(200).send({
          message: `Go to this link: ${host}/recovery-password?user=${userFound._id}`,
        })
      }
    }
  })
}

function changePassword(req, res) {
  const params = req.body;

  User.findById(params.id, (err, userFound) => {
    if (err) {
      res.status(500).send({
        message: 'Something was wrong, please contact with the Administrator.',
        error: err
      })
    } else {
      if (!userFound) {
        res.status(500).send({
          message: "We don't any registered user with this email."
        })
      } else {
        bcrypt.hash(params.password, null, null, (err, hash) => {
          if (err) {
            res.status(500).send({
              message: 'Something was wrong, please contact with the Administrator.',
              error: err
            })
          } else {
            userFound.password = hash;
            userFound.save((err, userStored) => {
              if (err) {
                res.status(500).send({
                  message: 'Something was wrong, please contact with the Administrator.',
                  error: err
                })
              } else {
                res.status(200).send({
                  message: 'Password updated.'
                })
              }
            })
          }
        })
      }
    }
  })
}

function login(req, res) {
  const params = req.body;
  const email = params.email;
  const password = params.password;

  function validatorPassword(password, userToValidate) {
    bcrypt.compare(password, userToValidate.password, (err, check) => {
      if (err) {
        res.status(500).send({
          message: 'Something was wrong, please contact with the Administrator.',
          error: err
        })
      } else {
        if (check) {
          userToValidate.last_login = moment().unix();
          userToValidate.save((err, userStored) => {
            if (err) {
              res.status(500).send({
                message: 'Something was wrong, please contact with the Administrator.',
                error: err
              })
            } else {
              res.status(200).send({
                message: 'Login success.',
                user: userToValidate,
                token: jwt.createToken(userToValidate),
              })  
            }
          })
        } else {
          res.status(500).send({
            message: 'Password is not correct.'
          })
        }
      }
    })
  }

  function validatorEmail() {
    User.findOne({
      email: params.email.toLowerCase()
    }, '+password', (err, userFound) => {
      if (err) {
        res.status(500).send({
          message: 'Something was wrong, please contact with the Administrator.',
          error: err
        })
      } else {
        if (userFound) {
          validatorPassword(password, userFound);
        } else {
          res.status(500).send({
            message: 'This is not a registered user.'
          })
        }
      }
    })
  }

  if (!email || email == '' && !password || password == '') {
    res.status(500).send({
      message: 'Email and password are required.'
    })
  } else {
    validatorEmail();
  }
}

function getContacts(req, res) {
  const id = req.params.user;
  User.findById(id, (err, userFound) => {
    if (err) {
      res.status(500).send({
        message: 'Something was wrong, please contact with the Administrator.',
        error: err
      })
    } else {
      if (!userFound) {
        res.status(500).send({
          message: "We don't any registered user with this email."
        })
      } else {
        User.populate(userFound, { path: 'contacts', select: 'name email last_login _id' }, (err, userWithContacts) => {
          if (err) {
            res.status(500).send({
              message: 'Something was wrong, please contact with the Administrator.',
              error: err
            })
          } else {
            res.status(200).send({
              contacts: userWithContacts.contacts
            })
          }
        })
      }
    }
  })
}

function getAll(req, res) {
  User.find({}, function (err, users) {
    if (err) {
      res.status(500).send({
        message: 'Something was wrong, please contact with the Administrator.',
        error: err
      })
    } else {
      res.status(200).send({
        users: users
      })
    }
  })
}

function addContact(req, res) {
  const params = req.body;
  User.findByIdAndUpdate(
    params.userId,
    { '$push': { 'contacts': params.contactId } },
    { 'new': true, 'upsert': true },
    (err, userFound) => {
      if (err) {
        res.status(500).send({
          message: 'Something was wrong, please contact with the Administrator.',
          error: err
        })
      } else {
        if (!userFound) {
          res.status(500).send({
            message: "We don't any registered user with this email."
          })
        } else {
          res.status(200).send({
            message: `New contact added.`,
          })
        }
      }
  })
}

module.exports = {
  createUser,
  recoveryPassword,
  changePassword,
  login,
  getAll,
  getContacts,
  addContact
}
