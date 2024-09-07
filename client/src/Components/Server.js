const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/social-media-app', { useNewUrlParser: true, useUnifiedTopology: true });

// Define models
const User = mongoose.model('User', { name: String, email: String, password: String });
const Post = mongoose.model('Post', { content: String, user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } });
const Story = mongoose.model('Story', { content: String, user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } });
const Chat = mongoose.model('Chat', { message: String, user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } });

// Define routes
app.use('/api/login', require('./routes/login'));
app.use('/api/register', require('./routes/register'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/stories', require('./routes/stories'));
app.use('/api/chats', require('./routes/chats'));

// Socket.io connection
io.on('connection', (socket) => {
  console.log('New connection');

  // Handle real-time updates
});

server.listen(3001, () => {
  console.log('Server started on port 3001');
});

io.on('connection', (socket) => {
  console.log('New connection');

  // Handle real-time updates
  socket.on('post-create', async (data) => {
    const post = await Post.create(data);
    io.emit('post-created', post);
  });

  socket.on('story-create', async (data) => {
    const story = await Story.create(data);
    io.emit('story-created', story);
  });

  socket.on('chat-message', async (data) => {
    const chat = await Chat.create(data);
    io.emit('chat-message-sent', chat);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});