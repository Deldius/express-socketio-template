/**
 * Module dependencies.
 * 
 * @module app      Express Engine from bootstrap
 * @module server   Express HTTP server
 * @module io       Socket.io
 * 
 * @export app
 * @export server
 * @export io
 */
var {app, server, io} = require('./bootstrap');
var path              = require('path');

/**
 * Register Socket.io
 */
// io.set("transports", ['websocket']);

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

app.get('/socket', function (req, res) {
  res.sendFile(path.join(__dirname, '../views/socket.html'));
});

/**
 * Register Routes
 */
app.use('/', require('./../routes'));
app.use('/api', require('./../routes/api'))

module.exports = {app, server, io};