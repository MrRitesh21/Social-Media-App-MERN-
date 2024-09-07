import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Post from './Post';
import Story from './Story';
import Chat from './Chat';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
        <Route path="/post" component={Post} />
        <Route path="/story" component={Story} />
        <Route path="/chat" component={Chat} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;