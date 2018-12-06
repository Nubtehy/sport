const validate = (values) => {
  const errors = {};
  if (!values.get('firstName')) {
    errors.firstName = 'Required';
  } else if (values.get('firstName').length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.get('lastName')) {
    errors.lastName = 'Required';
  } else if (values.get('lastName').length > 15) {
    errors.lastName = 'Must be 15 characters or less';
  }

  if (!values.get('email')) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
};
export default validate;
