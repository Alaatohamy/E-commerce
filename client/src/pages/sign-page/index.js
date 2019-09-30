import React from "react";
import { SignIn, SignUp } from "components";
import { SignPage, SignFormCol, SignFormColContainer } from "./sign-page.style";

const SignInPage = () => {
  return (
    <SignPage>
      <SignFormColContainer>
        <SignFormCol>
          <SignIn />
        </SignFormCol>
        <SignFormCol>
          <SignUp />
        </SignFormCol>
      </SignFormColContainer>
    </SignPage>
  );
};

export default SignInPage;
