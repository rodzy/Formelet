import React, { Fragment } from "react";
import { Heading } from "../styled-components/Heading";
import { MainContainer } from "../styled-components/MainContainer";
import { HeadingContainer } from "../styled-components/HeadingContainer";
import { Labels } from "../styled-components/Labels";
import { Inputs } from "../styled-components/Inputs";
import { Button } from "../styled-components/Button";
import { Form } from "../styled-components/Form";
import { FormContent } from "../styled-components/FormContent";

const Login = () => {
  return (
    <Fragment>
      <MainContainer>
        <HeadingContainer>
          <Heading>Log in</Heading>
        </HeadingContainer>
        <Form>
          <FormContent>
            <Labels>Email</Labels>
            <Inputs/>   
            <Labels>Password</Labels>
            <Inputs/>
          </FormContent>
          <Button>Log in</Button>
        </Form>
      </MainContainer>
    </Fragment>
  );
};

export default Login;
