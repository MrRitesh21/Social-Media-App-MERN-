import express from 'express';
import authMiddleware from './middleware/auth';
import postRoutes from './routes/posts';
import storyRoutes from './routes/stories';
import chatRoutes from './routes/chats';

const app = express();

app.use(express.json());
app.use(authMiddleware);

app.use('/api/posts', postRoutes);
app.use('/api/stories', storyRoutes);
app.use('/api/chats', chatRoutes);

export default app;