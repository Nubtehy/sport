import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { Button, Input } from 'components/controls';
import validate from './validation';


const warn = (values) => {
  // IMPORTANT: values is an Immutable.Map here!
  const errors = {};
  if (values.get('firstName') && /[^a-zA-Z0-9 ]/i.test(values.get('firstName'))) {
    errors.firstName = 'Only alphanumeric characters';
  }

  if (values.get('lastName') && /[^a-zA-Z0-9 ]/i.test(values.get('lastName'))) {
    errors.lastName = 'Only alphanumeric characters';
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
        <Button accent type="submit" name="confirm" disabled={pristine || submitting}>Submit</Button>
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
