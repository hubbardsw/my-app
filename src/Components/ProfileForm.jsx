import React from 'react'
import {Form, FormGroup, Col, Input, Label, Row, Button,Container} from 'reactstrap'

const ProfileForm =(props)=>{
    console.log(props)

return (

<div>
    <div> 
      <Container className="yolo">
        <Row>
             <Col xs="6" className="profile-form">
              <Form>
                <FormGroup row>
                <Col md={2}>
                  <Label>Title:</Label>
                  </Col>
                  <Col md={9}>
                    <Input type="text" name="title" value={props.formData.title} onChange={props.onChange} />
                  </Col>
                </FormGroup>
                <FormGroup row> 
                <Col md={2}>
                  <Label>Bio:</Label>
                  </Col>
                  <Col md={9}>
                    <Input component="textarea" name="bio" value={props.formData.bio} onChange={props.onChange} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                <Col md={2}>
                  <Label>Summary:</Label>
                  </Col>
                  <Col md={9}>
                    <Input type="text" name="summary" value={props.formData.summary} onChange={props.onChange}  />
                  </Col>
                </FormGroup>
                <FormGroup row>
                <Col md={2}>
                  <Label>Headline:</Label>
                  </Col>
                  <Col md={9}>
                    <Input type="text" name="headline" value={props.formData.headline} onChange={props.onChange}/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                <Col md={2}>
                  <Label>Slug:</Label>
                  </Col>
                  <Col md={9}>
                    <Input type="text" name="slug" value={props.formData.slug} onChange={props.onChange}/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                <Col md={2}>
                  <Label>Status:</Label>
                  </Col>
                  <Col md={9}>
                    <Input type="text" name="statusId" value={props.formData.statusId} onChange={props.onChange} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                <Col md={2}>
                  <Label>Skills:</Label>
                  </Col>
                  <Col md={9}>
                    <Input type="text" name="skills" value={props.formData.skills} onChange={props.onChange} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                <Col md={2}>
                  <Label>ImageUrl:</Label>
                  </Col>
                  <Col md={9}>
                    <Input type="text" name="primaryImage" value={props.formData.profileImage} onChange={props.onChange}  />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={12}>
                  <div>
              <Button color="primary" type="button" onClick={props.submitProfile}>Update</Button>
            </div>
                  </Col>
                </FormGroup>
              </Form>
          </Col>
        </Row>
      </Container>
      </div>
      </div>
)
}

export default ProfileForm
