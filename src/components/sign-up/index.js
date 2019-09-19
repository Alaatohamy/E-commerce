import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Button, CustomInput } from "components";
import { signUpStart } from "redux/user/user.actions";
import { selectSignOutError } from "redux/user/user.selectors";
import {
  Error,
  FormDescription,
  FormTitle,
  FormContainer
} from "styles/general/custom-form";
class SignUp extends React.Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirm_password: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirm_password } = this.state;
    const { signUpStart } = this.props;

    if (password !== confirm_password) {
      alert("Password doesn't match confirmed password");
      return;
    }
    signUpStart({ email, password, displayName });
    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirm_password: ""
    });
  };

  render() {
    const { displayName, email, password, confirm_password } = this.state;
    const { error } = this.props;

    return (
      <section className="form">
        <FormTitle>I do not have a account</FormTitle>
        <FormDescription>Sign up with your email and password</FormDescription>
        <FormContainer onSubmit={this.handleSubmit}>
          <CustomInput
            type="text"
            name="displayName"
            required
            placeholder="Name"
            label="Name"
            value={displayName}
            handleChange={this.handleChange}
          />
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
          <CustomInput
            type="password"
            name="confirm_password"
            required
            placeholder="Confirm password"
            label="Confirm password"
            value={confirm_password}
            handleChange={this.handleChange}
          />
          <Button text="Sign up" color="black" />
        </FormContainer>
        {error ? <Error>{error}</Error> : null}
      </section>
    );
  }
}

const mapState = createStructuredSelector({
  error: selectSignOutError
});

const mapDispatch = dispatch => ({
  signUpStart: user => dispatch(signUpStart(user))
});

export default connect(
  mapState,
  mapDispatch
)(SignUp);
