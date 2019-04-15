import React from "react";
import { Link, Redirect } from "react-router-dom";
import {Form, Input, Button, Col, FormGroup, Row} from 'reactstrap'


import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from "reactstrap";

export default class NavBar extends React.Component{
  constructor(props){
super()
  }

  searchByInput = () =>{
    this.props.searchByTerms()
  }

  handleChange = (e)=>{
  this.props.handleSearchChange(e.target.value)
  }

    render(){
  const search = this.props.search
  console.log(search)
        return (

<Navbar color="light" light expand="md">
          <NavbarBrand href="/">Swagger Api {this.props.email}</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href={'/blog'}>Blogs</NavLink>
              </NavItem>

              <NavItem>
                <NavLink>Jobs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Tech Companies</NavLink>
              </NavItem>

              <NavItem onClick={<Redirect to="/blog" />}>
                <NavLink>Get Profiles</NavLink>
              </NavItem>

              <NavItem />
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink>
                  <Link onClick={this.props.logoutUser} to="/login">
                    Logout
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
            <Form>
            <FormGroup>
                <Row style={{padding:"0 0 0 15px"}}>
                    <Col md={6}>
            <Input type="text" value={search} onChange={this.handleChange} />
            </Col>
            <Col md={2}>
            <Button onClick={this.searchByInput}>Search</Button>
            </Col>
            </Row>
            </FormGroup>
        </Form>
        </Navbar>
        )
    }
  }
