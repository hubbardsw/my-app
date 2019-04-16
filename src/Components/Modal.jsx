import React from "react";

import { Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class ModalResponsive extends React.Component {
  constructor(props) {
    super();
  }
  showButton = () => {
    this.setState({ showButton: false });
  };

  redirectUser = () => {
    this.props.toggle();
  };

  render() {
    let welcome = `${this.props.loggedIn ? `logged in` : `registered`}`;
    //const showButton = this.props.showButton;

    return (
      <div>
        <Modal
          isOpen={this.props.isOpen}
          toggle={this.props.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.props.toggle} />
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
            <Link to="/home">
              <Button color="danger" onClick={this.redirectUser}>
                {this.props.buttonLabel}X
              </Button>
            </Link>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
