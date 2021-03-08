export default (token) => {
  const headersConfig = {
    'Content-type': 'application/json',
  };

  if (token) headersConfig.Authorization = `Bearer ${token}`;

  return headersConfig;
};
