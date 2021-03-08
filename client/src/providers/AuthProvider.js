import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AuthContext } from '../context';

import { headers, loginAPI, logoutAPI } from '../utils';

const AuthProvider = ({ children }) => {
  const history = useHistory();

  const login = async (data) => {
    try {
      const currentToken = localStorage.getItem('jwt') || null;
      const { token, userData } = await loginAPI(data, headers(currentToken));

      if (token && userData) {
        localStorage.setItem('jwt', token);
        history.push('/products');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async () => {
    try {
      const currentToken = localStorage.getItem('jwt') || null;
      const data = await logoutAPI(headers(currentToken));

      if (data.status === 'success') {
        localStorage.removeItem('jwt');
        history.push('/');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const checkAuth = () => !!localStorage.getItem('jwt');

  return (
    <AuthContext.Provider value={{ login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
