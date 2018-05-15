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
var socket = require('./../routes/socket');

/**
 * Register Socket.io
 */
socket(io);

/**
 * Register Routes
 */
app.use('/', require('./../routes'));
app.use('/api', require('./../routes/api'))

module.exports = {app, server, io};