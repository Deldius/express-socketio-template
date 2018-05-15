module.exports = (io) => {

  // Public Namespace
  var public = io.of('/public');
  public.on('connection', onPublicConnection);

  function onPublicConnection(socket) {

    socket.broadcast.emit('chat message', '>> A user has connected')
  
    socket.on('chat message', (msg) => {
      public.emit('chat message', msg);
    });

    socket.on('disconnect', function () {
      public.emit('chat message', '>> A user has disconnected');
    });
  }
}
