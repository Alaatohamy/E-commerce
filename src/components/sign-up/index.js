import React from 'react';
import { Button, CustomInput } from 'components';
import { auth, createUserProfileDocument } from 'firebase-config/firebase.utils';

class SignUp extends React.Component {
  state = {
    displayName: '',
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

  handleSubmit = async e => {
    e.preventDefault();
    const {displayName, email, password, confirm_password} = this.state;
    if(password !== confirm_password) {
      alert("Password doesn't match confirmed password");
      return;
    }

    try {
      /** Authenticate the user with email and password
       * @param {string} email
       * @param {string} password
       * @return {object} Authenticated user
       * */
      const {user} = await auth.createUserWithEmailAndPassword(email, password);

      /** Save the user at firestore, call it here to add displayName to saved data.
       * @param {object} user - contain only email and password from the user data(what er authenticate with)
       * @param {object} otherData -  any additional data
       * @return {object} user reference
       * */
      await createUserProfileDocument(user, {displayName});
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirm_password: ''
      });
    } catch(err){
      alert(err.message);
    }
  }

  render() {
    const {displayName, email, password, confirm_password} = this.state;

    return (
      <section className="form">
        <h1 className="title">I do not have a account</h1>
        <p>Sign up with your email and password</p>
        <form onSubmit={this.handleSubmit}>
          <CustomInput type="text" name="displayName" required placeholder="Name" label="Name" value={displayName} handleChange={this.handleChange} />
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