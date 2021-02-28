const sanitizeHtml = require('sanitize-html');

module.exports = (data) => {
  Object.keys(data).forEach((key) => (data[key] = sanitizeHtml(data[key])));
  return data;
};
