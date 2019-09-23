import React from "react";
import { SignIn, SignUp } from "components";
import "./sign-page.style.scss";

const SignInPage = () => {
  return (
    <div className="sign-page">
      <section className="cols cols--2">
        <div className="col">
          <SignIn />
        </div>
        <div className="col">
          <SignUp />
        </div>
      </section>
    </div>
  );
};

export default SignInPage;
