import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts, getStories, getChats } from '../actions/postActions';
import Home from '../components/Home';

const HomeContainer = ({ posts, stories, chats, getPosts, getStories, getChats }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts();
    getStories();
    getChats();
    setLoading(false);
  }, [getPosts, getStories, getChats]);

  return (
    <Home
      posts={posts}
      stories={stories}
      chats={chats}
      loading={loading}
    />
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts,
  stories: state.stories,
  chats: state.chats,
});

export default connect(mapStateToProps, { getPosts, getStories, getChats })(HomeContainer);