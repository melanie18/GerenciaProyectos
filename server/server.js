'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
const https = require('https');
const fs = require('fs');
const app = require('./app');

const options = {}
let server = {};
if (process.env.ENVIRONMENT === 'production') {
  options.key = fs.readFileSync('/var/www/certificates/meet-app.key');
  options.cert = fs.readFileSync('/var/www/certificates/meet-app.crt');
  server = https.createServer(options, app);
} else {
  server = require('http').Server(app);
}
const io = require('socket.io')(server);

mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://localhost:27017/meet_app', {
    useMongoClient: true
  })
  .then(() => {
    console.log('Coonections with MongoDB successful : meet-app');

    io.on('connection', socket => {
      socket.on('join-room', (roomId, userId) => {
        socket.join(roomId);
        socket.to(roomId).broadcast.emit('user-connected', userId);

        socket.on('disconnect', () => {
          socket.to(roomId).broadcast.emit('user-disconnected', userId);
        })
      });
    })

    server.listen(process.env.PORT, process.env.HOST, () => {
      console.log(`Server runing correctly in http://${process.env.HOST}:${process.env.PORT}`);
    })
  })
  .catch(err => console.log(err));
