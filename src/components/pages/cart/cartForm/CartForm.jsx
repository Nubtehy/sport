import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { Button, Input } from 'components/controls';
import { ControlsWrapper } from '../Cart.styled';

const validate = (values) => {
  const errors = {};
  if (!values.get('firstName')) {
    errors.username = 'Required';
  } else if (values.get('firstName').length > 15) {
    errors.username = 'Must be 15 characters or less';
  }

  if (!values.get('lastName')) {
    errors.username = 'Required';
  } else if (values.get('lastName').length > 15) {
    errors.username = 'Must be 15 characters or less';
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

const warn = (values) => {
  // IMPORTANT: values is an Immutable.Map here!
  const errors = {};
  if (values.get('firstName') && /[^a-zA-Z0-9 ]/i.test(values.get('firstName'))) {
    errors.username = 'Only alphanumeric characters';
  }

  if (values.get('lastName') && /[^a-zA-Z0-9 ]/i.test(values.get('lastName'))) {
    errors.username = 'Only alphanumeric characters';
  }

  if (values.get('email') && /.+@aol\.com/.test(values.get('email'))) {
    errors.email = 'Really? You still use AOL for your email?';
  }

  return errors;
};


function CartForm(props) {
  const {
    handleSubmit, pristine, reset, submitting,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component={Input}
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component={Input}
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component={Input}
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <Button type="submit" name="confirm" disabled={pristine || submitting}>Submit</Button>
      </div>
    </form>
  );
}
const displayName = 'Cart form';
CartForm.displayName = displayName;

export default reduxForm({
  form: 'cartform', // a unique identifier for this form
  validate,
  warn,
  destroyOnUnmount: false,
})(CartForm);
