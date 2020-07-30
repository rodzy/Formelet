import React, { Fragment, useState } from "react";
import { Heading } from "../styled-components/Heading";
import { MainContainer } from "../styled-components/MainContainer";
import { HeadingContainer } from "../styled-components/HeadingContainer";
import { Labels } from "../styled-components/Labels";
import { Inputs } from "../styled-components/Inputs";
import { Button } from "../styled-components/Button";
import { Form } from "../styled-components/Form";
import { FormContent } from "../styled-components/FormContent";

const Login = () => {
  //State
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  //Constants
  const { email, password } = user;

  //Events
  const onChange = (e) => {
    setUser({
      ...user,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      setError(true);
      return;
    }
  };

  return (
    <Fragment>
      <MainContainer>
        <HeadingContainer>
          <Heading>Log in</Heading>
        </HeadingContainer>
        <Form onSubmit={onSubmit}>
          <FormContent>
            <Labels htmlFor="email">Email</Labels>
            <Inputs
              type="email"
              id="email"
              name="email"           
              value={email}
              onChange={onChange}
            />
            <Labels htmlFor="password">Password</Labels>
            <Inputs
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
            />
            <h4
              style={{
                color: `red`,
                textAlign:`center`
              }}
            >
              {error ? "All the fields are required!" : null}
            </h4>
          </FormContent>
          <Button type="submit">Log in</Button>
        </Form>
      </MainContainer>
    </Fragment>
  );
};

export default Login;
