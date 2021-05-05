'use strict'

const express = require('express');
const UserController = require('../controllers/user');
const router = express.Router();

router.post('/user/register', UserController.createUser);
router.get('/user/recovery-password/:email', UserController.recoveryPassword);
router.post('/user/change-password', UserController.changePassword);
router.post('/user/login', UserController.login);
router.get('/user/all', UserController.getAll);
router.get('/user/contact/all/:user', UserController.getContacts);
router.post('/user/contact/add', UserController.addContact);

module.exports = router;
