module.exports = (io) => {
  // io.set("transports", ['websocket']);
  
  io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
  });
}
