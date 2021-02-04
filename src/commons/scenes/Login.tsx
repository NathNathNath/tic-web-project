import React from "react";
import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-text.png";
import "../../assets/styles/login.css";

export default class LoginForm extends React.Component {
  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
        className="login-container"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" className="p-text-color" textAlign="center">
            <Image src={logo} style={{ width: "60%" }} />
          </Header>
          <Form size="large">
            <Segment padded>
              <Header as="h1" className="p-text-color" textAlign="center">
                Sign In
              </Header>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
              <Button
                className="p-bg-color"
                fluid
                size="large"
                as={Link}
                to={"/home"}
              >
                Login
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}
