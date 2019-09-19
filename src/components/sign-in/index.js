import React from "react";
import { connect } from "react-redux";
import { Button, CustomInput } from "components";
import { auth } from "firebase-config/firebase.utils";
import { googleSignInStart } from "redux/user/user.actions";
import { ActionsContainer } from "./sign-in.style";
import {
  Error,
  FormDescription,
  FormTitle,
  FormContainer
} from "styles/general/custom-form";

class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: ""
      });
    } catch (err) {
      alert("Check your email or password again, please");
    }
  };

  render() {
    const { email, password } = this.state;
    const { googleSignInStart } = this.props;

    return (
      <section>
        <FormTitle>I already have an account</FormTitle>
        <FormDescription>Sign in with your email and password</FormDescription>
        <FormContainer onSubmit={this.handleSubmit}>
          <CustomInput
            type="email"
            name="email"
            required
            placeholder="Email"
            label="Email"
            value={email}
            handleChange={this.handleChange}
          />
          <CustomInput
            type="password"
            name="password"
            required
            placeholder="Password"
            label="Password"
            value={password}
            handleChange={this.handleChange}
          />
          <ActionsContainer>
            <Button text="Sign in" color="black" />
            <Button
              text="Sign in with Google"
              color="blue"
              type="button"
              onClick={googleSignInStart}
            />
          </ActionsContainer>
        </FormContainer>
      </section>
    );
  }
}

const mapDispatch = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart())
});

export default connect(
  null,
  mapDispatch
)(SignIn);
