import express from 'express';
import Story from '../models/Story';

const router = express.Router();

router.post('/', async (req, res) => {
  const { content } = req.body;
  const story = new Story({ content });
  try {
    await story.save();
    res.json({ message: 'Story created successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Story creation failed' });
  }
});

router.get('/', async (req, res) => {
  const stories = await Story.find();
  res.json(stories);
});

export default router;