/**
 * Module dependencies.
 * 
 * @module app      Loaded-depency Express Engine
 * @module server   Express HTTP server
 * @module config
 * @module io       Socket.io
 * 
 * @export app      with registered routes
 * @export server
 * @module config
 * @export io       with event listeners/dispatchers
 */
var {app, server, config, io} = require('./bootstrap');

/**
 * Register Socket.io Route
 */
var publicSocket = require('./../routes/sockets/public');
publicSocket(io);

/**
 * Register Routes
 */
app.use('/', require('./../routes'));
app.use('/api', require('./../routes/api'))

module.exports = {app, server, config, io};