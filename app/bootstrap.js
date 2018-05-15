/**
 * Bootstrap for the Express Engine
 * 
 * @version 1.0
 * 
 * @module express        Express
 * @module path
 * @module cookie-parser  Parse Cookie header and populate req.cookies with an object keyed by the cookie names
 * @module morgan         HTTP request logger middleware for node.js
 * 
 * @export app
 * @export server
 * @export io
 */

var express         = require('express');
var path            = require('path');
var cookieParser    = require('cookie-parser');
var logger          = require('morgan');
var http            = require('http');

// Initialize
var app     = express();
var server  = http.createServer(app);

// Register Socket.io
var io      = require('socket.io')(server, {
  
});

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'jade');

// load dependencies
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// set port
app.set('port', normalizePort(process.env.PORT || '3000'));

module.exports = {app, server, io};


function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
