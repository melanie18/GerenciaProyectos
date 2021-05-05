'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  name: String,
  email: String,
  password: {
    type: String,
    select: false
  },
  create_at: String,
  last_login: String,
  updated_at: String,
  contacts: [
    { 
      type: Schema.ObjectId, 
      ref: 'User',
      select: false
    }
  ],
});

module.exports = mongoose.model('User', UserSchema);
