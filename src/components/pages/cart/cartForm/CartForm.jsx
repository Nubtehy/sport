import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { Button, Input } from 'components/controls';
import { ControlsWrapper } from '../Cart.styled';

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }


  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 15) {
    errors.lastName = 'Must be 15 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const warn = (values) => {
  const warnings = {};
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...';
  }
  return warnings;
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
})(CartForm);
