import React from 'react';
import { Button, CustomInput } from 'components';
import { signInWithGoogle, auth } from 'firebase-config/firebase.utils';
import './sign-in.style.scss';

class SignIn extends React.Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = async e => {
    e.preventDefault();
    const {email, password} = this.state;
    
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: ''
      })
    } catch(err) {
      console.log('sign-in error: ', err.message);
    }
  }

  render() {
    const {email, password} = this.state;

    return (
      <section className="form sign-in">
        <h2 className="title">I already have an account</h2>
        <p>Sign in with your email and password</p>
        <form onSubmit={this.handleSubmit}>
          <CustomInput type="email" name="email" required placeholder="Email" label="Email" value={email} handleChange={this.handleChange} />
          <CustomInput type="password" name="password" required placeholder="Password" label="Password" value={password} handleChange={this.handleChange} />
          <div className="actions">
            <Button text="Sign in" color="black" />
            <Button text="Sign in with Google" color="blue" type="button" onClick={signInWithGoogle} />
          </div>
        </form>
      </section>
    )
  }
}

export default SignIn;