const express = require('express');
const router = express.Router();
const Story = require('../models/Story');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, async (req, res) => {
  const { content } = req.body;
  const story = new Story({ content, user: req.user._id });
  try {
    await story.save();
    res.json({ message: 'Story created successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Story creation failed' });
  }
});

router.get('/', async (req, res) => {
  const stories = await Story.find().populate('user');
  res.json(stories);
});

module.exports = router;