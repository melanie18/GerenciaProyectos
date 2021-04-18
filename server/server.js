'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
const https = require('https');
const fs = require('fs');
const app = require('./app');

mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://localhost:27017/meet_app', {
    useMongoClient: true
  })
  .then(() => {
    console.log('Coonections with MongoDB successful : meet-app');


    app.listen(process.env.PORT, process.env.HOST, () => {
      console.log(`Server runing correctly in http://${process.env.HOST}:${process.env.PORT}`);
    })
  })
  .catch(err => console.log(err));
  