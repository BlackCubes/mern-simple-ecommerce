import React from 'react';
import PropTypes from 'prop-types';

import { AuthContext } from '../context';

const AuthProvider = ({ children }) => (
  <AuthContext.Provider>{children}</AuthContext.Provider>
);

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
