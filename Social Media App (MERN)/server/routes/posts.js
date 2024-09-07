import express from 'express';
import Post from '../models/Post';

const router = express.Router();

router.post('/', async (req, res) => {
  const { content } = req.body;
  const post = new Post({ content });
  try {
    await post.save();
    res.json({ message: 'Post created successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Post creation failed' });
  }
});

router.get('/', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

export default router;