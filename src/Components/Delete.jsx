import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const DeleteProfileCard = () => {
  return (
    <div>
      <FontAwesomeIcon className="icon" icon={faTrashAlt} size="2x" />
    </div>
  );
};

export default DeleteProfileCard;
