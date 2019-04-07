import React from "react";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: props.initialModalState,
      toLogin: false,
      loggedIn: props.loggedInState,
      showButton: props.showButton
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  showButton = () => {
    this.setState({ showButton: false });
  };

  redirectUser = () => {
    this.toggle();
    this.setState({ toLogin: true });
  };
  render() {
    let toLogin = this.state.toLogin;
    let welcome = `${this.state.loggedIn ? `logged in` : `registered`}`;
    const { showButton } = this.state;

    console.log(toLogin);
    if (this.state.toLogin) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}Test Modal
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle} />
          <ModalBody>
            <div className="text-center">
              <FontAwesomeIcon
                style={{ textAlign: "center", color: "#6DB65B" }}
                icon={faCheckCircle}
                size="4x"
              />
              <h4 className="text-center">Success!</h4>
              <p className="text-center">You have {welcome} successfully</p>
            </div>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}