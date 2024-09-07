import express from 'express';
import Chat from '../models/Chat';

const router = express.Router();

router.post('/', async (req, res) => {
  const { message } = req.body;
  const chat = new Chat({ message });
  try {
    await chat.save();
    res.json({ message: 'Chat message sent successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Chat message sending failed' });
  }
});

router.get('/', async (req, res) => {
  const chats = await Chat.find();
  res.json(chats);
});

export default router;