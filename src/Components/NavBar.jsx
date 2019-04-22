import React from "react";
import './navbar.css'
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
         return (

<Navbar color="dark"  dark expand="md" >
          <NavbarBrand href=''>User: {this.props.email}</NavbarBrand>
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
              <NavItem />
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Profiles
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={this.props.showProfileForm}>Create Profile</DropdownItem>
                  <DropdownItem onClick={this.props.getPagination} >Show Profiles</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
             
                  <NavLink onClick={this.props.logoutUser} href={'/'} to="/">
                    Logout
                 
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
