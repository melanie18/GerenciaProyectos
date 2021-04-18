'use strict';

require('dotenv').config();

const fs = require('fs');
const path = require('path');

const bcrypt = require('bcrypt-nodejs');
const moment = require('moment');

const User = require('../models/user');
const jwt = require('../services/jwt');

const hbs = require('nodemailer-express-handlebars');
const nodemailer = require('nodemailer');

function createUser(req, res) {
  let user = new User();
  let params = req.body;

  let dispatchSave = () => {
    user.name = !params.name ? '' : params.name;
    user.email = !params.email ? '' : params.email;
    user.phone = !params.phone ? '' : params.phone;
    user.role = 'user';
    user.avatar_url = !params.avatar_url ? '' : params.avatar_url;
    user.created_at = moment().format('DD/MM/YYYY');
    user.last_login = '';
    user.updated_at = '';
    user.state = false;
    user.state = 'Usuario';

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
            // const messageEmail = {
            //   to: `<${user.email}>`,
            //   subject: '[Areandina] Activación de Usuario',
            //   template: 'active-user',
            //   context: {
            //     link: `${process.env.IPPROD}/login?user=${userStored._id}`,
            //   }
            // }

            // const Email = {};
            // Email.transporter = nodemailer.createTransport(
            //     {
            //         service: 'Gmail',
            //         auth: {
            //           user: process.env.EMAIL_APPLICATION,
            //           pass: process.env.PASSWORD_EMAIL_APPLICATION
            //         },
            //     }
            // );
            // Email.transporter.use('compile', hbs({
            //   viewEngine: {
            //     extName: '.hbs',
            //     partialsDir: path.join(__dirname, '../views/templates-email'),
            //     layoutsDir: path.join(__dirname, '../views/templates-email'),
            //     defaultLayout: 'active-user.hbs',
            //   },
            //   extName: '.hbs',
            //   viewPath: path.join(__dirname, '../views/templates-email')
            // }));
            // Email.transporter.sendMail(messageEmail, (error, info) => {
            //   if (error) {
            //     console.log(error);
            //     res.status(500).send({
            //       message: '[ERROR] Sending email user to activate'
            //     })

            //     return;
            //   }

            //   Email.transporter.close();
            //   res.status(200).send({
            //     message: 'Usuario registrado con exito.',
            //     user: userStored
            //   })
            // })
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

        // let messageEmail = {
        //   // to: `<${data}>`,
        //   // subject: 'Recuperación de tu contraseña',
        //   // template: 'recovery-password',
        //   context: {
        //     link: `${process.env.IPPROD}/recuperar-contrasena?user=${userFound._id}`,
        //   },
        // }

        // const EmailRecovery = {};
        // EmailRecovery.transporter = nodemailer.createTransport(
        //     {
        //         service: 'Gmail',
        //         auth: {
        //           user: process.env.EMAIL_APPLICATION,
        //           pass: process.env.PASSWORD_EMAIL_APPLICATION
        //         },
        //     }
        // );
        // EmailRecovery.transporter.use('compile', hbs({
        //   viewEngine: {
        //     extName: '.hbs',
        //     partialsDir: path.join(__dirname, '../views/templates-email'),
        //     layoutsDir: path.join(__dirname, '../views/templates-email'),
        //     defaultLayout: 'recovery-password.hbs',
        //   },
        //   extName: '.hbs',
        //   viewPath: path.join(__dirname, '../views/templates-email')
        // }));
        // EmailRecovery.transporter.sendMail(messageEmail, (error, info) => {
        //   if (error) {
        //     console.log(error);
        //     res.status(500).send({
        //       message: '[ERROR] Sending email user to recovery password'
        //     })

        //     return;
        //   }

        //   EmailRecovery.transporter.close();
        //   res.status(200).send({
        //     message: 'Se ha enviado un email con las instrucciones para recuperar tu contraseña.',
        //   })
        // })
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
      }
      else {
        if (check) {
          res.status(200).send({
            message: 'Login success.',
            user: userToValidate,
            token: jwt.createToken(userToValidate),
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
        validatorPassword(password, userFound);
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

module.exports = {
  createUser,
  recoveryPassword,
  changePassword,
  login,
  getAll
}
