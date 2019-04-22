import React from "react";
import * as userService from "../services/userServices";
import {
  Button,
  Form,
  FormGroup,
  Card,
  CardBody,
  CardTitle,
  Input
} from "reactstrap";
import { Link} from "react-router-dom";
import ModalComponent from "./ModalComponent";
import ModalResponsive from "./Modal";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoggedIn: false,
      isModalOpen: true
    };
  }

  toggle = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };
  showModal = () => {
    this.setState({ isModalOpen: true });
  };
  loginUser = () => {
    const payload = {
      email: this.state.email,
      password: this.state.password
    };
    userService
      .logInUser(payload)
      .then(this.userLoginSuccess)
      .catch(this.userLoginError);
  };

  userLoginSuccess = data => {
    console.log(data);
    this.setState({ isLoggedIn: true });
    //Send cookie setter 
  };

  userLoginError = error => console.log(error);

  onChange = e => {
    const email = e.target.value;
    this.setState({ email });
  };

  onChangePassword = e => {
    const password = e.target.value;
    this.setState({ password });
  };

  render() {
    if (this.state.isLoggedIn) {
      return (
        <div>
          <ModalResponsive
            loggedIn={true}
            isOpen={this.state.isModalOpen}
            toggle={this.toggle}
          />
        </div>
      );
    }

    return (
      <div className="container vertical-center">
        <div className="row h-100 justify-content-center  ">
          <Card className="col-md-3 card ">
            <CardTitle>
              <h5>Please Login</h5>
            </CardTitle>
            <CardBody>
              <Form>
                <div className="form-group">
                  <FormGroup>
                    <Input
                      className="form-control"
                      placeholder="UserName"
                      type="email"
                      onChange={this.onChange}
                      value={this.state.firstName}
                    />
                  </FormGroup>
                </div>
                <div className="form-group">
                  <FormGroup>
                    <Input
                      className="form-control"
                      placeholder="Password"
                      type="password"
                      onChange={this.onChangePassword}
                      value={this.state.lastName}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Button
                      className="test"
                      color="danger"
                      onClick={this.loginUser}
                    >
                      Submit
                    </Button>
                    <p>
                      Don't have and account?{" "}
                      <Link to="/registration">Register</Link>
                    </p>
                  </FormGroup>
                </div>
              </Form>
            </CardBody>
          </Card>
          <ModalResponsive />
          <ModalComponent />
        </div>
      </div>
    );
  }
}
