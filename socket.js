const socketIO = require('socket.io');

const socket = (server) => {
  const io = socketIO(server);

  io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });

    socket.on('newPost', (post) => {
      io.emit('newPost', post);
    });

    socket.on('newStory', (story) => {
      io.emit('newStory', story);
    });

    socket.on('newChat', (chat) => {
      io.emit('newChat', chat);
    });
  });
};

module.exports = socket;