import React from "react";
import { Button, Card, CardBody, CardTitle, CardFooter } from "reactstrap";
import './peopleCard.css'

const PeopleCard = props => {

  const checkImageType = (props) =>{
    if (!(props).endsWith(('.png', '.jpg', '.jpeg'))){
    return props
    }else{
      props = "/blank-profile-pic.png"
    }
  }


  return (
   <div>
      <Card className="col-md-3 card float-left card-extra" >
        <CardTitle />
        <CardBody>
          <div className="profile-img mx-auto"><img alt="" src={checkImageType(props.image)} width="100px" height="100px"></img></div>
          <p>name:{props.name}</p>
         <p>slug:{props.slug}</p> 
        </CardBody>
        <div>
        <Button color="success" className="float-left profile-button">Edit</Button>
        <Button color="danger" className="float-right profile-button">Delete</Button>
        </div>
      </Card>
    </div>
  );
};
export default PeopleCard;
