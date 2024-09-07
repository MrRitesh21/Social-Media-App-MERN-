import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/authActions';
import Login from '../components/Login';

const LoginContainer = ({ login }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    login(credentials);
  };

  return (
    <Login
      credentials={credentials}
      setCredentials={setCredentials}
      handleSubmit={handleSubmit}
    />
  );
};

export default connect(null, { login })(LoginContainer);