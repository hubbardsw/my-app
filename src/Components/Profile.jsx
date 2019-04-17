import React from "react";
import { Container, Row, Col, FormGroup, Input, Label, Button } from "reactstrap";
import "./profile.css";
import NavBar from "./NavBar";
import { Formik, Form, Field} from "formik";
import ModalResponsive from './Modal'

const ProfileDisplay = (props, {people}) => {
  console.log(props)

    //const updateProfile = () => {
   //   props.update(props.person.id, props.person)
  //  }

    const submitForm = (values) =>{
      let value = {id:props.person.id,...values};
      props.submitUpdateForm(value)
    
    }
    //if(props.person.skills){ 
    // var skill = 
  
   //}

  return ( 
    <div>
      <NavBar />
      <Container>
        <Row>
          <Col xs="5" className="profile">
            <div className="center-text image mx-auto">
              <img alt="/" src={props.person.primaryImage.imageUrl || props.person.primaryImage} />
            </div>
            <p>Headline:{props.person.headline}</p>
            <br />
            <div>
            <p> Bio:{props.person.bio}</p>
            </div>
            <br />
            <div>
            <p>Summary: {props.person.summary}</p>
            </div>
          </Col>
          <Col xs="6" className="profile-form">
            <Formik
              initialValues={{
                title: props.person.title,
                bio: props.person.bio,
                summary: props.person.summary,
                headline: props.person.headline,
                slug:props.person.slug,
                statusId:props.person.statusId,
                skills: props.person.skills.map( person => person.name),
                primaryImage: props.person.primaryImage.imageUrl || props.person.primaryImage
              }}
              onSubmit={(values, { setSubmitting }) => {
                submitForm(values);
              }}>
              <Form>
                <FormGroup row>
                <Col md={2}>
                  <Label>Title:</Label>
                  </Col>
                  <Col md={9}>
                    <Input type="text" name="title" tag={Field} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                <Col md={2}>
                  <Label>Bio:</Label>
                  </Col>
                  <Col md={9}>
                    <Input component="textarea" name="bio" tag={Field} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                <Col md={2}>
                  <Label>Summary:</Label>
                  </Col>
                  <Col md={9}>
                    <Input type="text" name="summary" tag={Field} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                <Col md={2}>
                  <Label>Headline:</Label>
                  </Col>
                  <Col md={9}>
                    <Input type="text" name="headline" tag={Field} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                <Col md={2}>
                  <Label>Slug:</Label>
                  </Col>
                  <Col md={9}>
                    <Input type="text" name="slug" tag={Field} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                <Col md={2}>
                  <Label>Status:</Label>
                  </Col>
                  <Col md={9}>
                    <Input type="text" name="statusId" tag={Field} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                <Col md={2}>
                  <Label>Skills:</Label>
                  </Col>
                  <Col md={9}>
                    <Input type="text" name="skills" tag={Field} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                <Col md={2}>
                  <Label>ImageUrl:</Label>
                  </Col>
                  <Col md={9}>
                    <Input type="text" name="primaryImage" tag={Field} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={8}>
                  <div className="center-text image mx-auto">
              <img alt="/" src={props.person.primaryImage.imageUrl || props.person.primaryImage} />
              <Button color="primary" type="submit" >Update</Button>
            </div>
                  </Col>
                </FormGroup>
              </Form>
            </Formik>
          </Col>
        </Row>
      </Container>
      < ModalResponsive/>
    </div>
  );
};

export default ProfileDisplay;