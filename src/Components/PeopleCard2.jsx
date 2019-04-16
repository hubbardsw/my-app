import React from "react";
import { Button, Card, CardBody, CardTitle } from "reactstrap";
import "./peopleCard.css";

const PeopleCard = props => {
  console.log(props)
  const checkImageType = props => {
    console.log(props)
    if (props.endsWith(("g"))) {
      return props;
    } else {
     return "https://www.freeiconspng.com/uploads/no-image-icon-0.png";
    
    }
  };

  const editProfile = (e, people) => {
    console.log(props.people);
    props.getProfileById(people);
  };

  return (
    <div className="PeopleCard">
      <Card className="col-md-3 card float-left card-extra">
        <CardTitle />
        <CardBody>
          <div className="profile-img mx-auto">
            <img
              alt=""
              src={checkImageType(props.image)}
              width="100px"
              height="100px"
            />
          </div>
          <p>name:{props.people.title}</p>
          <p>slug:{props.people.slug}</p>
          <p>index:{props.index}</p>
        </CardBody>
        <div>
          <Button
            onClick={e=>editProfile(e, props.people)}
            color="success"
            className="float-left profile-button"
          >
            Edit
          </Button>
          <Button color="danger" className="float-right profile-button">
            Delete
          </Button>
        </div>
      </Card>
    </div>
  );
};
export default PeopleCard;
