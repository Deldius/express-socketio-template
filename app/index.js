/**
 * Module dependencies.
 * 
 * @module app      Express Engine from bootstrap
 * @module server   Express HTTP server
 * @module io       Socket.io
 */
var {app, server, io} = require('./bootstrap');

/**
 * Register Routes
 */
app.use('/', require('./../routes'));
app.use('/api', require('./../routes/api'))

module.exports = {app, server, io};