import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useAuthContext } from '../context';

const loginFormFields = [
  {
    type: 'email',
    name: 'email',
    id: 'email',
    placeholder: 'Email',
    message: "Let's go!",
    addlstyle: {
      width: '100%',
      float: 'left',
      padding: '0 0.75rem',
    },
  },
  {
    type: 'password',
    name: 'password',
    id: 'password',
    placeholder: 'Password',
    message: "Let's go!",
    addlstyle: {
      width: '100%',
      float: 'left',
      padding: '0 0.75rem',
    },
  },
];

const LoginPage = ({ FormContainerComponent }) => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { checkAuth } = useAuthContext();

  if (checkAuth) history.push('/products');

  const onSubmission = (data) => setLoginData(data);

  console.log(loginData);

  return (
    <FormContainerComponent
      onSubmit={onSubmission}
      formFields={loginFormFields}
    />
  );
};

LoginPage.propTypes = {
  FormContainerComponent: PropTypes.elementType.isRequired,
};

export default LoginPage;
