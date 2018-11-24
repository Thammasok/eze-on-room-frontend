import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Alert,
  Card,
  CardBody,
  FormGroup,
  Row,
  Col,
  Label,
  Input
} from "reactstrap";

import Button from "components/CustomButton/CustomButton.jsx";
import CardAuthor from "components/CardElements/CardAuthor.jsx";

import logo from "assets/img/logo-small.png";

import { getUserSingInRequest } from "../../actions/authentication";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.signIn(this.state.username, this.state.password);
  }

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
                      onKeyPress={this.handleChange.bind(this)}
                      value={this.state.username}
                      onChange={this.handleChange.bind(this)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="passwordTextbox">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="passwordTextbox"
                      placeholder="Password"
                      onKeyPress={this.handleChange.bind(this)}
                      value={this.state.password}
                      onChange={this.handleChange.bind(this)}
                    />
                  </FormGroup>
                  {this.props.authentication.error ? (
                    <FormGroup>
                      <Alert color="danger">
                        <span>{ this.props.authentication.data.message }</span>
                      </Alert>
                    </FormGroup>
                  ) : null}
                  {this.props.authentication.token !== undefined
                    ? this.props.history.push("/")
                    : false}
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        color="primary"
                        round
                        onClick={this.handleSubmit.bind(this)}
                      >
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

const mapStateToProps = state => {
  return {
    messages: state.messages,
    authentication: state.authentication
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: (username, password) => {
      dispatch(getUserSingInRequest(username, password));
    }
  };
};

Login.propTypes = {
  messages: PropTypes.object,
  authentication: PropTypes.object,
  signIn: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
