import React from "react";
import { Link } from "react-router-dom";

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
    render(){
        return (

<Navbar color="light" light expand="md">
          <NavbarBrand href="/">Swagger Api {this.props.email}</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>Blogs</NavLink>
              </NavItem>

              <NavItem>
                <NavLink>Jobs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Tech Companies</NavLink>
              </NavItem>

              <NavItem onClick={this.props.allUsers}>
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
        </Navbar>
        )
    }
}
