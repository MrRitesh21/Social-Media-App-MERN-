import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
});

export const getPosts = () => api.get('/posts');
export const getStories = () => api.get('/stories');
export const getChats = () => api.get('/chats');

export const createPost = (data) => api.post('/posts', data);
export const createStory = (data) => api.post('/stories', data);
export const createChat = (data) => api.post('/chats', data);

export const updatePost = (id, data) => api.patch(`/posts/${id}`, data);
export const updateStory = (id, data) => api.patch(`/stories/${id}`, data);
export const updateChat = (id, data) => api.patch(`/chats/${id}`, data);

export const deletePost = (id) => api.delete(`/posts/${id}`);
export const deleteStory = (id) => api.delete(`/stories/${id}`);
export const deleteChat = (id) => api.delete(`/chats/${id}`);