import React, { Fragment } from "react";
import { Heading } from "../styled-components/Heading";
import { MainContainer } from "../styled-components/MainContainer";
import { HeadingContainer } from "../styled-components/HeadingContainer";

const Login = () => {
  return (
    <Fragment>
      <MainContainer>
        <HeadingContainer>
          <Heading>Log in</Heading>
        </HeadingContainer>
        <form>
          <div>
            <label>Email</label>
            <input />
          </div>
          <div>
            <label>Password</label>
            <input />
          </div>
          <button>Log in</button>
        </form>
      </MainContainer>
    </Fragment>
  );
};

export default Login;
