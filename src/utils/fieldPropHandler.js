export const fieldInputProperties = (prop) => ({
  type: prop.type || 'text',
  name: prop.name,
  className: prop.errors[prop.name] ? 'error' : '',
  id: prop.id,
  value: prop.values[prop.name] || '',
  placeholder: prop.placeholder,
  onChange: prop.onChange,
  noValidate: prop.noValidate || true,
});

export const fieldInputErrors = (name, errors) =>
  errors[name] ? errors[name] : null;
