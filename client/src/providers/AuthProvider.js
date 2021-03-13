import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AuthContext } from '../context';

import { headers, loginAPI, logoutAPI } from '../utils';

const AuthProvider = ({ children }) => {
  const [apiAuthErr, setApiAuthErr] = useState(null);
  const history = useHistory();

  const login = async (data) => {
    try {
      const currentToken = localStorage.getItem('jwt') || null;
      const apiData = await loginAPI(data, headers(currentToken));

      if (apiData.status === 'success') {
        localStorage.setItem('jwt', apiData.token);
        history.push('/products');
      }

      if (apiData.status === ('fail' || 'error'))
        throw new Error(apiData.message);
    } catch (err) {
      setApiAuthErr(err.message);
    }
  };

  const logout = async () => {
    try {
      const currentToken = localStorage.getItem('jwt') || null;
      const apiData = await logoutAPI(headers(currentToken));

      if (apiData.status === 'success') {
        localStorage.removeItem('jwt');
        history.push('/');
      }

      if (apiData.status === ('fail' || 'error'))
        throw new Error(apiData.message);
    } catch (err) {
      setApiAuthErr(err.message);
    }
  };

  const checkAuth = () => !!localStorage.getItem('jwt');

  setTimeout(() => {
    setApiAuthErr(null);
  }, 10000);

  return (
    <AuthContext.Provider value={{ login, logout, checkAuth, apiAuthErr }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
