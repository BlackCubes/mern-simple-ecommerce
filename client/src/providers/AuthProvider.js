import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AuthContext } from '../context';

import { headers, loginAPI, logoutAPI } from '../utils';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const history = useHistory();

  const login = async (data) => {
    try {
      const currentToken = localStorage.getItem('jwt') || null;
      const { token, userData } = await loginAPI(data, headers(currentToken));

      if (token && userData) {
        setUser(userData);
        localStorage.setItem('jwt', token);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async () => {
    try {
      const currentToken = localStorage.getItem('jwt') || null;
      const data = await logoutAPI(headers(currentToken));

      if (data.status === 'success') history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
