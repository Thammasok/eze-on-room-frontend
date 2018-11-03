import React from "react";
import { Card, CardBody, FormGroup, Row, Col, Label, Input } from "reactstrap";

import Button from "components/CustomButton/CustomButton.jsx";
import CardAuthor from "components/CardElements/CardAuthor.jsx";

import logo from "assets/img/logo-small.png";

class Login extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col md={{ size: 6, offset: 3 }} xs={12}>
            <Card className="card-user" style={{ marginTop: "60px" }}>
              <CardBody>
                <CardAuthor
                  avatar={logo}
                  avatarAlt="..."
                  title="Login"
                  description="Login before use control panel."
                />
                <form>
                  <FormGroup>
                    <Label for="usernameTexbox">Username</Label>
                    <Input
                      type="text"
                      name="username"
                      id="usernameTexbox"
                      placeholder="Username"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="passwordTextbox">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="passwordTextbox"
                      placeholder="Password"
                    />
                  </FormGroup>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button color="primary" round>
                        Login
                      </Button>
                    </div>
                  </Row>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Login;
