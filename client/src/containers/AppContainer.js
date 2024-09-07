import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { login, logout } from '../actions/authActions';
import App from '../components/App';

const AppContainer = ({ auth, login, logout }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (auth.isAuthenticated) {
      setUser(auth.user);
    }
  }, [auth]);

  return (
    <App
      user={user}
      login={login}
      logout={logout}
    />
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { login, logout })(AppContainer);