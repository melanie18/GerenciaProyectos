'use strict';

const express = require('express');
const { StreamChat } = require('stream-chat');
const bodyParser = require('body-parser');

const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const usersRoutes = require('./routes/user');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, 'assets', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({
  limit: '50mb'
}));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.all('/**', (req, res, next) => {
  if (req.path.includes('api')) {
    next();
  } else {
    res.status(200).set({
      'content-type': 'text/html; charset=utf-8'
    }).sendFile('public/index.html', {
      root: __dirname
    });
  }
})

app.use('/api', usersRoutes);

// catch 404 and forward to error handler
/*app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
})*/

// error handler
/*app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
})*/

module.exports = app;
