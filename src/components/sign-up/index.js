import React from 'react';
import { Button, CustomInput } from 'components';

class SignUp extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm_password: ''
  };

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('submit', e);
  }

  render() {
    const {name, email, password, confirm_password} = this.state;

    return (
      <section className="form">
        <h1 className="title">I do not have a account</h1>
        <p>Sign up with your email and password</p>
        <form onSubmit={this.handleSubmit}>
          <CustomInput type="text" name="name" required placeholder="Name" label="Name" value={name} handleChange={this.handleChange} />
          <CustomInput type="email" name="email" required placeholder="Email" label="Email" value={email} handleChange={this.handleChange} />
          <CustomInput type="password" name="password" required placeholder="Password" label="Password" value={password} handleChange={this.handleChange} />
          <CustomInput type="password" name="confirm_password" required placeholder="Confirm password" label="Confirm password" value={confirm_password} handleChange={this.handleChange} />
          <Button text="Sign up" color="black" />
        </form>
      </section>
    )
  }
}

export default SignUp;