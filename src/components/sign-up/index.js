import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Button, CustomInput } from "components";
import { signUpStart } from "redux/user/user.actions";
import { selectSignUpError } from "redux/user/user.selectors";
import {
  Error,
  FormDescription,
  FormTitle,
  FormContainer
} from "styles/general/custom-form";

const SignUp = ({ signUpStart, error }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirm_password: ""
  });
  const { displayName, email, password, confirm_password } = userCredentials;

  const handleChange = e => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirm_password) {
      alert("Password doesn't match confirmed password");
      return;
    }
    signUpStart({ email, password, displayName });
    setUserCredentials({
      displayName: "",
      email: "",
      password: "",
      confirm_password: ""
    });
  };

  return (
    <section className="form">
      <FormTitle>I do not have a account</FormTitle>
      <FormDescription>Sign up with your email and password</FormDescription>
      <FormContainer onSubmit={handleSubmit}>
        <CustomInput
          type="text"
          name="displayName"
          required
          placeholder="Name"
          label="Name"
          value={displayName}
          handleChange={handleChange}
        />
        <CustomInput
          type="email"
          name="email"
          required
          placeholder="Email"
          label="Email"
          value={email}
          handleChange={handleChange}
        />
        <CustomInput
          type="password"
          name="password"
          required
          placeholder="Password"
          label="Password"
          value={password}
          handleChange={handleChange}
        />
        <CustomInput
          type="password"
          name="confirm_password"
          required
          placeholder="Confirm password"
          label="Confirm password"
          value={confirm_password}
          handleChange={handleChange}
        />
        <Button text="Sign up" color="black" />
      </FormContainer>
      {error ? <Error>{error}</Error> : null}
    </section>
  );
};

const mapState = createStructuredSelector({
  error: selectSignUpError
});

const mapDispatch = dispatch => ({
  signUpStart: user => dispatch(signUpStart(user))
});

export default connect(
  mapState,
  mapDispatch
)(SignUp);
