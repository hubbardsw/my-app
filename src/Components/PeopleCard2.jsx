import React from "react";
import { Button, Card, CardBody, CardTitle } from "reactstrap";
import "./peopleCard.css";
import { domainToUnicode } from "url";
import { deleteSelectedProfile } from "../services/peopleService";

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

  //const deleteProfile = (e, people ) =>{
  //  const payload = {
  //    id:people.id,
  //    title:people.title,
  //    bio:people.bio,
  //    summary:people.summary,
  //    headline:people.headline,
  //    slug:people.slug,
      // statusId:people.statusId,
      // skills:people.skills,
    //   primaryImage:people.primaryImage
    // }
    // props.deleteSelectedProfile(people.id, payload)

  //}

  const deleteProfile = (e, people)=>{
    props.deleteProfile(people.id)
  }

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
          <Button color="danger" className="float-right profile-button" onClick={e=>deleteProfile(e, props.people)}>
            Delete
          </Button>
        </div>
      </Card>
    </div>
  );
};
export default PeopleCard;
