/**
 * Module dependencies.
 * 
 * @module app      Express Engine from bootstrap
 * @module server   Express HTTP server
 * @module io       Socket.io
 * @module socket   Socket event listener/dispatcher
 * 
 * @export app
 * @export server
 * @export io
 */
var {app, server, io} = require('./bootstrap');
var publicSocket = require('./../routes/sockets/public');

/**
 * Register Socket.io Route
 */
publicSocket(io);

/**
 * Register Routes
 */
app.use('/', require('./../routes'));
app.use('/api', require('./../routes/api'))

module.exports = {app, server, io};