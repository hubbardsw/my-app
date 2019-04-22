import React from "react";
import "./Register.css";
import * as userService from "../services/userServices"
import { Link} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faAddressCard,
  faSignInAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Form,
  FormGroup,
  Card,
  CardBody,
  CardTitle,
  Input
} from "reactstrap";
import ModalComponent from "./ModalComponent";

library.add(faCheckCircle, faAddressCard, faSignInAlt);

export default class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      registrationSuccess: false
    };
  }

  handleInputChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  };

  registerUser = () => {
    const payload = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm
    };
    userService
      .registerUser(payload)
      .then(this.userRegistrationSuccess)
      .catch(this.userLoginError);
  };

  userRegistrationSuccess = res => {
    console.log(res);
    this.setState({ registrationSuccess: true });
    this.clearForm();
  };

  userLoginError = error => {
    console.log(error);
  };

  clearForm = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: ""
    });
  };

  render() {
    console.log(this.state.registrationSuccess);
    if (this.state.registrationSuccess) {
      return <ModalComponent initialModalState={true} showButton={true} />;
    }

    return (
      <div className="container vertical-center">
        <div className="row h-100 justify-content-center  ">
          <Card className="col-md-3 card ">
            <CardTitle>
              <h5>Registration</h5>
              <FontAwesomeIcon icon={faAddressCard} size="3x" />
            </CardTitle>
            <CardBody>
              <Form>
                <div className="form-group">
                  <FormGroup>
                    <Input
                      className="form-control"
                      name="firstName"
                      value={this.state.firstName}
                      placeholder="First Name"
                      type="text"
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                </div>
                <div className="form-group">
                  <FormGroup>
                    <Input
                      className="form-control"
                      name="lastName"
                      value={this.state.lastName}
                      placeholder="Last Name"
                      type="text"
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      className="form-control"
                      name="email"
                      value={this.state.email}
                      placeholder="Email"
                      type="email"
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      className="form-control"
                      name="password"
                      value={this.state.password}
                      placeholder="Password"
                      type="password"
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      className="form-control"
                      name="passwordConfirm"
                      value={this.state.passwordConfirm}
                      placeholder="Confirm Password"
                      type="password"
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Button
                      className="test"
                      color="danger"
                      onClick={this.registerUser}
                    >
                      Submit
                    </Button>
                    <p>
                      Already Have an Account? <Link to="/">Login</Link>
                    </p>
                  </FormGroup>
                </div>
              </Form>
            </CardBody>
          </Card>
        </div>
        <ModalComponent />
      </div>
    );
  }
}
