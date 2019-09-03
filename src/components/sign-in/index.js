import React from 'react';
import { Button, CustomInput } from 'components';
import './sign-in.style.scss';

class SignIn extends React.Component {
  state = {

  };

  render() {
    return (
      <section className="form">
        <h2 className="title">I already have an account</h2>
        <p>Sign in with your email and password</p>
        <form>
          <CustomInput type="email" name="email" required placeholder="Email" label="Email" />
          <CustomInput type="password" name="password" required placeholder="Password" label="Password" />
          <div className="actions">
            <Button text="Sign in" color="black" />
            <Button text="Sign in with Google" color="blue" />
          </div>
        </form>
      </section>
    )
  }
}

export default SignIn;