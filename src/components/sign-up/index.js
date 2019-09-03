import React from 'react';
import { Button, CustomInput } from 'components';

class SignUp extends React.Component {
  state = {

  };

  render() {
    return (
      <section className="form">
        <h1 className="title">I do not have a account</h1>
        <p>Sign up with your email and password</p>
        <form>
          <CustomInput type="text" name="name" required placeholder="Name" label="Name" />
          <CustomInput type="email" name="email" required placeholder="Email" label="Email" />
          <CustomInput type="password" name="password" required placeholder="Password" label="Password" />
          <CustomInput type="password" name="confirm-password" required placeholder="Confirm password" label="Confirm password" />
          <Button text="Sign up" color="black" />
        </form>
      </section>
    )
  }
}

export default SignUp;