import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Button, CustomInput } from "components";
import { googleSignInStart, emailSignInStart } from "redux/user/user.actions";
import { selectSignInError } from "redux/user/user.selectors";
import { ActionsContainer } from "./sign-in.style";
import {
  Error,
  FormDescription,
  FormTitle,
  FormContainer
} from "styles/general/custom-form";

const SignIn = ({ googleSignInStart, error, emailSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });
  const { email, password } = userCredentials;
  const handleChange = e => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    emailSignInStart(email, password);
    setUserCredentials({ email: "", password: "" });
  };

  return (
    <section>
      <FormTitle>I already have an account</FormTitle>
      <FormDescription>Sign in with your email and password</FormDescription>
      <FormContainer onSubmit={handleSubmit}>
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
      {error ? <Error>{error}</Error> : null}
    </section>
  );
};

const mapDispatch = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

const mapState = createStructuredSelector({
  error: selectSignInError
});

export default connect(
  mapState,
  mapDispatch
)(SignIn);
