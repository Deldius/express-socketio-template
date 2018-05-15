/**
 * Module dependencies.
 * 
 * @module app      Express Engine from bootstrap
 * @module server   Express HTTP server
 * @module io       Socket.io
 */
var {app, server, io} = require('./bootstrap');

/**
 * Set Routes
 */
app.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
})

/**
 * Set Exception Handler
 */
var ExceptionHandler = require('./Exceptions/handler')(app);

module.exports = {app, server, io};