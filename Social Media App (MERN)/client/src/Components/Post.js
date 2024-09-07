const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, async (req, res) => {
  const { content } = req.body;
  const post = new Post({ content, user: req.user._id });
  try {
    await post.save();
    res.json({ message: 'Post created successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Post creation failed' });
  }
});

router.get('/', async (req, res) => {
  const posts = await Post.find().populate('user');
  res.json(posts);
});

module.exports = router;