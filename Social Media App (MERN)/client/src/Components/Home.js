import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    socket.on('post-created', (post) => {
      setPosts((prevPosts) => [...prevPosts, post]);
    });

    socket.on('story-created', (story) => {
      setStories((prevStories) => [...prevStories, story]);
    });

    socket.on('chat-message-sent', (chat) => {
      setChats((prevChats) => [...prevChats, chat]);
    });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>{post.content}</li>
        ))}
      </ul>

      <h1>Stories</h1>
      <ul>
        {stories.map((story) => (
          <li key={story._id}>{story.content}</li>
        ))}
      </ul>

      <h1>Chats</h1>
      <ul>
        {chats.map((chat) => (
          <li key={chat._id}>{chat.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;