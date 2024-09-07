const express = require('express');
const router = express.Router();
const Chat = require('../models/Chat');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, async (req, res) => {
  const { message } = req.body;
  const chat = new Chat({ message, user: req.user._id });
  try {
    await chat.save();
    res.json({ message: 'Chat message sent successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Chat message sending failed' });
  }
});

router.get('/', async (req, res) => {
  const chats = await Chat.find().populate('user');
  res.json(chats);
});

module.exports = router;