import React, { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions/authActions';
import Register from '../components/Register';

const RegisterContainer = ({ register }) => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    register(user);
  };

  return (
    <Register
      user={user}
      setUser={setUser}
      handleSubmit={handleSubmit}
    />
  );
};

export default connect(null, { register })(RegisterContainer);